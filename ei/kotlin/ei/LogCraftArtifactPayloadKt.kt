// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializelogCraftArtifactPayload")
public inline fun logCraftArtifactPayload(block: ei.LogCraftArtifactPayloadKt.Dsl.() -> kotlin.Unit): ei.Ei.LogCraftArtifactPayload =
  ei.LogCraftArtifactPayloadKt.Dsl._create(ei.Ei.LogCraftArtifactPayload.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.LogCraftArtifactPayload`
 */
public object LogCraftArtifactPayloadKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.LogCraftArtifactPayload.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.LogCraftArtifactPayload.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.LogCraftArtifactPayload = _builder.build()

    /**
     * `optional .ei.CraftArtifactRequest req = 1;`
     */
    public var req: ei.Ei.CraftArtifactRequest
      @kotlin.jvm.JvmName("getReq")
        get() = _builder.req
      @kotlin.jvm.JvmName("setReq")
        set(value) {
        _builder.req = value
      }
    /**
     * <code>optional .ei.CraftArtifactRequest req = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearReq() {
      _builder.clearReq()
    }
    /**
     * <code>optional .ei.CraftArtifactRequest req = 1;</code>
     * @return Whether the req field is set.
     * @return This builder for chaining.
     */
    public fun hasReq(): kotlin.Boolean {
      return _builder.hasReq()
    }

    public val LogCraftArtifactPayloadKt.Dsl.reqOrNull: ei.Ei.CraftArtifactRequest?
      get() = _builder.reqOrNull

    /**
     * `optional .ei.CraftArtifactResponse res = 2;`
     */
    public var res: ei.Ei.CraftArtifactResponse
      @kotlin.jvm.JvmName("getRes")
        get() = _builder.res
      @kotlin.jvm.JvmName("setRes")
        set(value) {
        _builder.res = value
      }
    /**
     * <code>optional .ei.CraftArtifactResponse res = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearRes() {
      _builder.clearRes()
    }
    /**
     * <code>optional .ei.CraftArtifactResponse res = 2;</code>
     * @return Whether the res field is set.
     * @return This builder for chaining.
     */
    public fun hasRes(): kotlin.Boolean {
      return _builder.hasRes()
    }

    public val LogCraftArtifactPayloadKt.Dsl.resOrNull: ei.Ei.CraftArtifactResponse?
      get() = _builder.resOrNull
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.LogCraftArtifactPayload.copy(block: `ei`.LogCraftArtifactPayloadKt.Dsl.() -> kotlin.Unit): ei.Ei.LogCraftArtifactPayload =
  `ei`.LogCraftArtifactPayloadKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.LogCraftArtifactPayloadOrBuilder.reqOrNull: ei.Ei.CraftArtifactRequest?
  get() = if (hasReq()) getReq() else null

public val ei.Ei.LogCraftArtifactPayloadOrBuilder.resOrNull: ei.Ei.CraftArtifactResponse?
  get() = if (hasRes()) getRes() else null

