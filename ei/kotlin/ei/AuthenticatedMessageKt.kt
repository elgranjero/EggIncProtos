// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializeauthenticatedMessage")
public inline fun authenticatedMessage(block: ei.AuthenticatedMessageKt.Dsl.() -> kotlin.Unit): ei.Ei.AuthenticatedMessage =
  ei.AuthenticatedMessageKt.Dsl._create(ei.Ei.AuthenticatedMessage.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.AuthenticatedMessage`
 */
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
     * `optional bytes message = 1;`
     */
    public var message: com.google.protobuf.ByteString
      @kotlin.jvm.JvmName("getMessage")
        get() = _builder.message
      @kotlin.jvm.JvmName("setMessage")
        set(value) {
        _builder.message = value
      }
    /**
     * <code>optional bytes message = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>optional bytes message = 1;</code>
     * @return Whether the message field is set.
     * @return This builder for chaining.
     */
    public fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }

    /**
     * `optional uint32 version = 3;`
     */
    public var version: kotlin.Int
      @kotlin.jvm.JvmName("getVersion")
        get() = _builder.version
      @kotlin.jvm.JvmName("setVersion")
        set(value) {
        _builder.version = value
      }
    /**
     * <code>optional uint32 version = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearVersion() {
      _builder.clearVersion()
    }
    /**
     * <code>optional uint32 version = 3;</code>
     * @return Whether the version field is set.
     * @return This builder for chaining.
     */
    public fun hasVersion(): kotlin.Boolean {
      return _builder.hasVersion()
    }

    /**
     * `optional string code = 2;`
     */
    public var code: kotlin.String
      @kotlin.jvm.JvmName("getCode")
        get() = _builder.code
      @kotlin.jvm.JvmName("setCode")
        set(value) {
        _builder.code = value
      }
    /**
     * <code>optional string code = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearCode() {
      _builder.clearCode()
    }
    /**
     * <code>optional string code = 2;</code>
     * @return Whether the code field is set.
     * @return This builder for chaining.
     */
    public fun hasCode(): kotlin.Boolean {
      return _builder.hasCode()
    }

    /**
     * `optional bool compressed = 4;`
     */
    public var compressed: kotlin.Boolean
      @kotlin.jvm.JvmName("getCompressed")
        get() = _builder.compressed
      @kotlin.jvm.JvmName("setCompressed")
        set(value) {
        _builder.compressed = value
      }
    /**
     * <code>optional bool compressed = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearCompressed() {
      _builder.clearCompressed()
    }
    /**
     * <code>optional bool compressed = 4;</code>
     * @return Whether the compressed field is set.
     * @return This builder for chaining.
     */
    public fun hasCompressed(): kotlin.Boolean {
      return _builder.hasCompressed()
    }

    /**
     * `optional uint32 original_size = 5;`
     */
    public var originalSize: kotlin.Int
      @kotlin.jvm.JvmName("getOriginalSize")
        get() = _builder.originalSize
      @kotlin.jvm.JvmName("setOriginalSize")
        set(value) {
        _builder.originalSize = value
      }
    /**
     * <code>optional uint32 original_size = 5;</code>
     * @return This builder for chaining.
     */
    public fun clearOriginalSize() {
      _builder.clearOriginalSize()
    }
    /**
     * <code>optional uint32 original_size = 5;</code>
     * @return Whether the originalSize field is set.
     * @return This builder for chaining.
     */
    public fun hasOriginalSize(): kotlin.Boolean {
      return _builder.hasOriginalSize()
    }

    /**
     * `optional string user_id = 6;`
     */
    public var userId: kotlin.String
      @kotlin.jvm.JvmName("getUserId")
        get() = _builder.userId
      @kotlin.jvm.JvmName("setUserId")
        set(value) {
        _builder.userId = value
      }
    /**
     * <code>optional string user_id = 6;</code>
     * @return This builder for chaining.
     */
    public fun clearUserId() {
      _builder.clearUserId()
    }
    /**
     * <code>optional string user_id = 6;</code>
     * @return Whether the userId field is set.
     * @return This builder for chaining.
     */
    public fun hasUserId(): kotlin.Boolean {
      return _builder.hasUserId()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.AuthenticatedMessage.copy(block: `ei`.AuthenticatedMessageKt.Dsl.() -> kotlin.Unit): ei.Ei.AuthenticatedMessage =
  `ei`.AuthenticatedMessageKt.Dsl._create(this.toBuilder()).apply { block() }._build()

