// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecontractSimPoll")
public inline fun contractSimPoll(block: ei.ContractSimPollKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractSimPoll =
  ei.ContractSimPollKt.Dsl._create(ei.Ei.ContractSimPoll.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.ContractSimPoll`
 */
public object ContractSimPollKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ContractSimPoll.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ContractSimPoll.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ContractSimPoll = _builder.build()

    /**
     * `optional uint32 client_version = 1;`
     */
    public var clientVersion: kotlin.Int
      @JvmName("getClientVersion")
      get() = _builder.clientVersion
      @JvmName("setClientVersion")
      set(value) {
        _builder.clientVersion = value
      }
    /**
     * `optional uint32 client_version = 1;`
     */
    public fun clearClientVersion() {
      _builder.clearClientVersion()
    }
    /**
     * `optional uint32 client_version = 1;`
     * @return Whether the clientVersion field is set.
     */
    public fun hasClientVersion(): kotlin.Boolean {
      return _builder.hasClientVersion()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ContractSimPoll.copy(block: `ei`.ContractSimPollKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractSimPoll =
  `ei`.ContractSimPollKt.Dsl._create(this.toBuilder()).apply { block() }._build()
