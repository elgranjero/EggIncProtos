//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmSynthetic
public inline fun authenticatedMessage(block: ei.AuthenticatedMessageKt.Dsl.() -> kotlin.Unit): ei.Ei.AuthenticatedMessage =
  ei.AuthenticatedMessageKt.Dsl._create(ei.Ei.AuthenticatedMessage.newBuilder()).apply { block() }._build()
public object AuthenticatedMessageKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.AuthenticatedMessage.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.AuthenticatedMessage.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.AuthenticatedMessage = _builder.build()

    /**
     * <code>optional bytes message = 1;</code>
     */
    public var message: com.google.protobuf.ByteString
      @JvmName("getMessage")
      get() = _builder.getMessage()
      @JvmName("setMessage")
      set(value) {
        _builder.setMessage(value)
      }
    /**
     * <code>optional bytes message = 1;</code>
     */
    public fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>optional bytes message = 1;</code>
     * @return Whether the message field is set.
     */
    public fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }

    /**
     * <code>optional uint32 version = 3;</code>
     */
    public var version: kotlin.Int
      @JvmName("getVersion")
      get() = _builder.getVersion()
      @JvmName("setVersion")
      set(value) {
        _builder.setVersion(value)
      }
    /**
     * <code>optional uint32 version = 3;</code>
     */
    public fun clearVersion() {
      _builder.clearVersion()
    }
    /**
     * <code>optional uint32 version = 3;</code>
     * @return Whether the version field is set.
     */
    public fun hasVersion(): kotlin.Boolean {
      return _builder.hasVersion()
    }

    /**
     * <code>optional string code = 2;</code>
     */
    public var code: kotlin.String
      @JvmName("getCode")
      get() = _builder.getCode()
      @JvmName("setCode")
      set(value) {
        _builder.setCode(value)
      }
    /**
     * <code>optional string code = 2;</code>
     */
    public fun clearCode() {
      _builder.clearCode()
    }
    /**
     * <code>optional string code = 2;</code>
     * @return Whether the code field is set.
     */
    public fun hasCode(): kotlin.Boolean {
      return _builder.hasCode()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.AuthenticatedMessage.copy(block: ei.AuthenticatedMessageKt.Dsl.() -> kotlin.Unit): ei.Ei.AuthenticatedMessage =
  ei.AuthenticatedMessageKt.Dsl._create(this.toBuilder()).apply { block() }._build()
