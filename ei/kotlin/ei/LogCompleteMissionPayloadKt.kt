// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializelogCompleteMissionPayload")
public inline fun logCompleteMissionPayload(block: ei.LogCompleteMissionPayloadKt.Dsl.() -> kotlin.Unit): ei.Ei.LogCompleteMissionPayload =
  ei.LogCompleteMissionPayloadKt.Dsl._create(ei.Ei.LogCompleteMissionPayload.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.LogCompleteMissionPayload`
 */
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
     * `optional .ei.MissionRequest req = 1;`
     */
    public var req: ei.Ei.MissionRequest
      @JvmName("getReq")
      get() = _builder.req
      @JvmName("setReq")
      set(value) {
        _builder.req = value
      }
    /**
     * `optional .ei.MissionRequest req = 1;`
     */
    public fun clearReq() {
      _builder.clearReq()
    }
    /**
     * `optional .ei.MissionRequest req = 1;`
     * @return Whether the req field is set.
     */
    public fun hasReq(): kotlin.Boolean {
      return _builder.hasReq()
    }
    public val LogCompleteMissionPayloadKt.Dsl.reqOrNull: ei.Ei.MissionRequest?
      get() = _builder.reqOrNull

    /**
     * `optional .ei.CompleteMissionResponse res = 2;`
     */
    public var res: ei.Ei.CompleteMissionResponse
      @JvmName("getRes")
      get() = _builder.res
      @JvmName("setRes")
      set(value) {
        _builder.res = value
      }
    /**
     * `optional .ei.CompleteMissionResponse res = 2;`
     */
    public fun clearRes() {
      _builder.clearRes()
    }
    /**
     * `optional .ei.CompleteMissionResponse res = 2;`
     * @return Whether the res field is set.
     */
    public fun hasRes(): kotlin.Boolean {
      return _builder.hasRes()
    }
    public val LogCompleteMissionPayloadKt.Dsl.resOrNull: ei.Ei.CompleteMissionResponse?
      get() = _builder.resOrNull
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.LogCompleteMissionPayload.copy(block: `ei`.LogCompleteMissionPayloadKt.Dsl.() -> kotlin.Unit): ei.Ei.LogCompleteMissionPayload =
  `ei`.LogCompleteMissionPayloadKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.LogCompleteMissionPayloadOrBuilder.reqOrNull: ei.Ei.MissionRequest?
  get() = if (hasReq()) getReq() else null

public val ei.Ei.LogCompleteMissionPayloadOrBuilder.resOrNull: ei.Ei.CompleteMissionResponse?
  get() = if (hasRes()) getRes() else null
