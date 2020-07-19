# MQTT
MQTT（Message Queuing Telemetry Transport，消息队列遥测传输协议），是一种基于发布/订阅（Publish/Subscribe）模式的轻量级通讯协议，该协议构建于TCP/IP协议上

## 优点
可以以**极少的代码和有限的带宽**，为远程设备提供实时**可靠**的消息服务

做为一种低开销、低带宽占用的即时通讯协议，MQTT在物联网、小型设备、移动应用等方面有广泛的应用。

## MQTT是哪一层的协议？
众所周知，TCP/IP参考模型可以分为四层：应用层、传输层、网络层、链路层。TCP和UDP位于传输层，应用层常见的协议有HTTP、FTP、SSH等。MQTT协议运行于TCP之上，属于**应用层协议**，因此只要是支持TCP/IP协议栈的地方，都可以使用MQTT。

## MQTT消息格式
每条MQTT命令消息的消息头都包含一个固定的报头，有些消息会携带一个可变报文头和一个负荷。消息格式如下：

> 固定报文头 | 可变报文头 | 负荷

## 固定报文头（Fixed Header）
MQTT固定报文头最少有两个字节，第一字节包含消息类型（Message Type）和QoS级别等标志位。第二字节开始是剩余长度字段，该长度是后面的可变报文头加消息负载的总长度，该字段最多允许四个字节。

## 可变报文头（Variable Header）
可变报文头主要包含协议名、协议版本、连接标志（Connect Flags）、心跳间隔时间（Keep Alive timer）、连接返回码（Connect Return Code）、主题名（Topic Name）等

## 有效负荷（Payload）
可以理解为消息主体（body）。

当MQTT发送的消息类型是CONNECT（连接）、PUBLISH（发布）、SUBSCRIBE（订阅）、SUBACK（订阅确认）、UNSUBSCRIBE（取消订阅）时，则会带有负荷。

## 消息质量（QoS）
MQTT消息质量有三个等级，QoS 0，QoS 1和 QoS 2。

- QoS 0：最多分发一次。消息的传递完全依赖底层的TCP/IP网络，协议里没有定义应答和重试，消息要么只会到达服务端一次，要么根本没有到达。
- QoS 1：至少分发一次。服务器的消息接收由PUBACK消息进行确认，如果通信链路或发送设备异常，或者指定时间内没有收到确认消息，发送端会重发这条在消息头中设置了DUP位的消息。
- QoS 2：只分发一次。这是最高级别的消息传递，消息丢失和重复都是不可接受的，使用这个服务质量等级会有额外的开销。 

### 举例
比如目前流行的共享单车智能锁，智能锁可以定时使用QoS level 0质量消息请求服务器，发送单车的当前位置，如果服务器没收到也没关系，反正过一段时间又会再发送一次。之后用户可以通过App查询周围单车位置，找到单车后需要进行解锁，这时候可以使用QoS level 1质量消息，手机App不断的发送解锁消息给单车锁，确保有一次消息能达到以解锁单车。最后用户用完单车后，需要提交付款表单，可以使用QoS level 2质量消息，这样确保只传递一次数据，否则用户就会多付钱了。


## 依赖
```xml
<dependency>
    <groupId>org.eclipse.paho</groupId>
    <artifactId>org.eclipse.paho.client.mqttv3</artifactId>
    <version>1.2.0</version>
</dependency>
```

## 订阅
```java
public class SubscribeSample {
    public static void main(String[] args) throws MqttException {
        String HOST = "tcp://127.0.0.1:1883";
        String TOPIC = "lw";
        int qos = 1;
        String clientid = "subClient";
        String userName = "test";
        String passWord = "test";
        try {
            // host为主机名，test为clientid即连接MQTT的客户端ID，
            // 一般以客户端唯一标识符表示，
            // MemoryPersistence设置clientid的保存形式，默认为以内存保存
            MqttClient client = new MqttClient(HOST, clientid, new MemoryPersistence());
            // MQTT的连接设置
            MqttConnectOptions options = new MqttConnectOptions();
            // 设置是否清空session,这里如果设置为false表示服务器会保留客户端的连接记录，
            // 这里设置为true表示每次连接到服务器都以新的身份连接
            options.setCleanSession(true);
            // 设置连接的用户名
            options.setUserName(userName);
            // 设置连接的密码
            options.setPassword(passWord.toCharArray());
            // 设置超时时间 单位为秒
            options.setConnectionTimeout(10);
            // 设置会话心跳时间 单位为秒 服务器会每隔1.5*20秒的时间向客户端发送个消息判断客户端是否在线，
            // 但这个方法并没有重连的机制
            options.setKeepAliveInterval(20);
            // 设置回调函数
            client.setCallback(new MqttCallback() {

                public void connectionLost(Throwable cause) {
                    System.out.println("connectionLost");
                }

                public void messageArrived(String topic, MqttMessage message) throws Exception {
                    System.out.println("topic:" + topic);
                    System.out.println("Qos:" + message.getQos());
                    System.out.println("message content:" + new String(message.getPayload()));

                }

                public void deliveryComplete(IMqttDeliveryToken token) {
                    System.out.println("deliveryComplete---------" + token.isComplete());
                }

            });
            client.connect(options);
            //订阅消息
            client.subscribe(TOPIC, qos);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## 发布

```java
public class Test {
    public static void main(String[] args) {

        String topic = "lw";
        String content = "hello 哈哈";
        int qos = 1;
        String broker = "tcp://127.0.0.1:1883";
        String userName = "test";
        String password = "test";
        String clientId = "pubClient";
        // 内存存储
        MemoryPersistence persistence = new MemoryPersistence();

        try {
            // 创建客户端
            MqttClient sampleClient = new MqttClient(broker, clientId, persistence);
            // 创建链接参数
            MqttConnectOptions connOpts = new MqttConnectOptions();
            // 在重新启动和重新连接时记住状态
            connOpts.setCleanSession(false);
            // 设置连接的用户名
            connOpts.setUserName(userName);
            connOpts.setPassword(password.toCharArray());
            // 建立连接
            sampleClient.connect(connOpts);
            // 创建消息
            MqttMessage message = new MqttMessage(content.getBytes());
            // 设置消息的服务质量
            message.setQos(qos);
            // 发布消息
            sampleClient.publish(topic, message);
            // 断开连接
            sampleClient.disconnect();
            // 关闭客户端
            sampleClient.close();
        } catch (MqttException me) {
            System.out.println("reason " + me.getReasonCode());
            System.out.println("msg " + me.getMessage());
            System.out.println("loc " + me.getLocalizedMessage());
            System.out.println("cause " + me.getCause());
            System.out.println("excep " + me);
            me.printStackTrace();
        }
    }
}
```