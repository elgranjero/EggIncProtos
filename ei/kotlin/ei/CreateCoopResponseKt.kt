// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecreateCoopResponse")
public inline fun createCoopResponse(block: ei.CreateCoopResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.CreateCoopResponse =
  ei.CreateCoopResponseKt.Dsl._create(ei.Ei.CreateCoopResponse.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.CreateCoopResponse`
 */
public object CreateCoopResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.CreateCoopResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.CreateCoopResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.CreateCoopResponse = _builder.build()

    /**
     * `optional bool success = 1;`
     */
    public var success: kotlin.Boolean
      @kotlin.jvm.JvmName("getSuccess")
        get() = _builder.success
      @kotlin.jvm.JvmName("setSuccess")
        set(value) {
        _builder.success = value
      }
    /**
     * <code>optional bool success = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearSuccess() {
      _builder.clearSuccess()
    }
    /**
     * <code>optional bool success = 1;</code>
     * @return Whether the success field is set.
     * @return This builder for chaining.
     */
    public fun hasSuccess(): kotlin.Boolean {
      return _builder.hasSuccess()
    }

    /**
     * `optional string message = 2;`
     */
    public var message: kotlin.String
      @kotlin.jvm.JvmName("getMessage")
        get() = _builder.message
      @kotlin.jvm.JvmName("setMessage")
        set(value) {
        _builder.message = value
      }
    /**
     * <code>optional string message = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>optional string message = 2;</code>
     * @return Whether the message field is set.
     * @return This builder for chaining.
     */
    public fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.CreateCoopResponse.copy(block: `ei`.CreateCoopResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.CreateCoopResponse =
  `ei`.CreateCoopResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

