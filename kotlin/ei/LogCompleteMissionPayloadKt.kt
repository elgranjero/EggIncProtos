//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmSynthetic
public inline fun logCompleteMissionPayload(block: ei.LogCompleteMissionPayloadKt.Dsl.() -> kotlin.Unit): ei.Ei.LogCompleteMissionPayload =
  ei.LogCompleteMissionPayloadKt.Dsl._create(ei.Ei.LogCompleteMissionPayload.newBuilder()).apply { block() }._build()
public object LogCompleteMissionPayloadKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.LogCompleteMissionPayload.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.LogCompleteMissionPayload.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.LogCompleteMissionPayload = _builder.build()

    /**
     * <code>optional .ei.MissionRequest req = 1;</code>
     */
    public var req: ei.Ei.MissionRequest
      @JvmName("getReq")
      get() = _builder.getReq()
      @JvmName("setReq")
      set(value) {
        _builder.setReq(value)
      }
    /**
     * <code>optional .ei.MissionRequest req = 1;</code>
     */
    public fun clearReq() {
      _builder.clearReq()
    }
    /**
     * <code>optional .ei.MissionRequest req = 1;</code>
     * @return Whether the req field is set.
     */
    public fun hasReq(): kotlin.Boolean {
      return _builder.hasReq()
    }

    /**
     * <code>optional .ei.CompleteMissionResponse res = 2;</code>
     */
    public var res: ei.Ei.CompleteMissionResponse
      @JvmName("getRes")
      get() = _builder.getRes()
      @JvmName("setRes")
      set(value) {
        _builder.setRes(value)
      }
    /**
     * <code>optional .ei.CompleteMissionResponse res = 2;</code>
     */
    public fun clearRes() {
      _builder.clearRes()
    }
    /**
     * <code>optional .ei.CompleteMissionResponse res = 2;</code>
     * @return Whether the res field is set.
     */
    public fun hasRes(): kotlin.Boolean {
      return _builder.hasRes()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.LogCompleteMissionPayload.copy(block: ei.LogCompleteMissionPayloadKt.Dsl.() -> kotlin.Unit): ei.Ei.LogCompleteMissionPayload =
  ei.LogCompleteMissionPayloadKt.Dsl._create(this.toBuilder()).apply { block() }._build()