//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmSynthetic
public inline fun verifyPurchaseResponse(block: ei.VerifyPurchaseResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.VerifyPurchaseResponse =
  ei.VerifyPurchaseResponseKt.Dsl._create(ei.Ei.VerifyPurchaseResponse.newBuilder()).apply { block() }._build()
public object VerifyPurchaseResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.VerifyPurchaseResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.VerifyPurchaseResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.VerifyPurchaseResponse = _builder.build()

    /**
     * <code>optional bool verified = 1;</code>
     */
    public var verified: kotlin.Boolean
      @JvmName("getVerified")
      get() = _builder.getVerified()
      @JvmName("setVerified")
      set(value) {
        _builder.setVerified(value)
      }
    /**
     * <code>optional bool verified = 1;</code>
     */
    public fun clearVerified() {
      _builder.clearVerified()
    }
    /**
     * <code>optional bool verified = 1;</code>
     * @return Whether the verified field is set.
     */
    public fun hasVerified(): kotlin.Boolean {
      return _builder.hasVerified()
    }

    /**
     * <code>optional string message = 2;</code>
     */
    public var message: kotlin.String
      @JvmName("getMessage")
      get() = _builder.getMessage()
      @JvmName("setMessage")
      set(value) {
        _builder.setMessage(value)
      }
    /**
     * <code>optional string message = 2;</code>
     */
    public fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>optional string message = 2;</code>
     * @return Whether the message field is set.
     */
    public fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.VerifyPurchaseResponse.copy(block: ei.VerifyPurchaseResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.VerifyPurchaseResponse =
  ei.VerifyPurchaseResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()