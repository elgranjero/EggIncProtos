// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecontractCoopStatusUpdateResponse")
public inline fun contractCoopStatusUpdateResponse(block: ei.ContractCoopStatusUpdateResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractCoopStatusUpdateResponse =
  ei.ContractCoopStatusUpdateResponseKt.Dsl._create(ei.Ei.ContractCoopStatusUpdateResponse.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.ContractCoopStatusUpdateResponse`
 */
public object ContractCoopStatusUpdateResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ContractCoopStatusUpdateResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ContractCoopStatusUpdateResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ContractCoopStatusUpdateResponse = _builder.build()

    /**
     * `optional bool finalized = 1;`
     */
    public var finalized: kotlin.Boolean
      @kotlin.jvm.JvmName("getFinalized")
        get() = _builder.finalized
      @kotlin.jvm.JvmName("setFinalized")
        set(value) {
        _builder.finalized = value
      }
    /**
     * <code>optional bool finalized = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearFinalized() {
      _builder.clearFinalized()
    }
    /**
     * <code>optional bool finalized = 1;</code>
     * @return Whether the finalized field is set.
     * @return This builder for chaining.
     */
    public fun hasFinalized(): kotlin.Boolean {
      return _builder.hasFinalized()
    }

    /**
     * `optional bool exists = 2;`
     */
    public var exists: kotlin.Boolean
      @kotlin.jvm.JvmName("getExists")
        get() = _builder.exists
      @kotlin.jvm.JvmName("setExists")
        set(value) {
        _builder.exists = value
      }
    /**
     * <code>optional bool exists = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearExists() {
      _builder.clearExists()
    }
    /**
     * <code>optional bool exists = 2;</code>
     * @return Whether the exists field is set.
     * @return This builder for chaining.
     */
    public fun hasExists(): kotlin.Boolean {
      return _builder.hasExists()
    }

    /**
     * `optional .ei.ContractCoopStatusResponse.MemberStatus status = 3;`
     */
    public var status: ei.Ei.ContractCoopStatusResponse.MemberStatus
      @kotlin.jvm.JvmName("getStatus")
        get() = _builder.status
      @kotlin.jvm.JvmName("setStatus")
        set(value) {
        _builder.status = value
      }
    /**
     * <code>optional .ei.ContractCoopStatusResponse.MemberStatus status = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearStatus() {
      _builder.clearStatus()
    }
    /**
     * <code>optional .ei.ContractCoopStatusResponse.MemberStatus status = 3;</code>
     * @return Whether the status field is set.
     * @return This builder for chaining.
     */
    public fun hasStatus(): kotlin.Boolean {
      return _builder.hasStatus()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ContractCoopStatusUpdateResponse.copy(block: `ei`.ContractCoopStatusUpdateResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractCoopStatusUpdateResponse =
  `ei`.ContractCoopStatusUpdateResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

