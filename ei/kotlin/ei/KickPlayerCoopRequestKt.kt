// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializekickPlayerCoopRequest")
public inline fun kickPlayerCoopRequest(block: ei.KickPlayerCoopRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.KickPlayerCoopRequest =
  ei.KickPlayerCoopRequestKt.Dsl._create(ei.Ei.KickPlayerCoopRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.KickPlayerCoopRequest`
 */
public object KickPlayerCoopRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.KickPlayerCoopRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.KickPlayerCoopRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.KickPlayerCoopRequest = _builder.build()

    /**
     * `optional .ei.BasicRequestInfo rinfo = 8;`
     */
    public var rinfo: ei.Ei.BasicRequestInfo
      @JvmName("getRinfo")
      get() = _builder.rinfo
      @JvmName("setRinfo")
      set(value) {
        _builder.rinfo = value
      }
    /**
     * `optional .ei.BasicRequestInfo rinfo = 8;`
     */
    public fun clearRinfo() {
      _builder.clearRinfo()
    }
    /**
     * `optional .ei.BasicRequestInfo rinfo = 8;`
     * @return Whether the rinfo field is set.
     */
    public fun hasRinfo(): kotlin.Boolean {
      return _builder.hasRinfo()
    }
    public val KickPlayerCoopRequestKt.Dsl.rinfoOrNull: ei.Ei.BasicRequestInfo?
      get() = _builder.rinfoOrNull

    /**
     * `optional string contract_identifier = 1;`
     */
    public var contractIdentifier: kotlin.String
      @JvmName("getContractIdentifier")
      get() = _builder.contractIdentifier
      @JvmName("setContractIdentifier")
      set(value) {
        _builder.contractIdentifier = value
      }
    /**
     * `optional string contract_identifier = 1;`
     */
    public fun clearContractIdentifier() {
      _builder.clearContractIdentifier()
    }
    /**
     * `optional string contract_identifier = 1;`
     * @return Whether the contractIdentifier field is set.
     */
    public fun hasContractIdentifier(): kotlin.Boolean {
      return _builder.hasContractIdentifier()
    }

    /**
     * `optional string coop_identifier = 2;`
     */
    public var coopIdentifier: kotlin.String
      @JvmName("getCoopIdentifier")
      get() = _builder.coopIdentifier
      @JvmName("setCoopIdentifier")
      set(value) {
        _builder.coopIdentifier = value
      }
    /**
     * `optional string coop_identifier = 2;`
     */
    public fun clearCoopIdentifier() {
      _builder.clearCoopIdentifier()
    }
    /**
     * `optional string coop_identifier = 2;`
     * @return Whether the coopIdentifier field is set.
     */
    public fun hasCoopIdentifier(): kotlin.Boolean {
      return _builder.hasCoopIdentifier()
    }

    /**
     * `optional string player_identifier = 3;`
     */
    public var playerIdentifier: kotlin.String
      @JvmName("getPlayerIdentifier")
      get() = _builder.playerIdentifier
      @JvmName("setPlayerIdentifier")
      set(value) {
        _builder.playerIdentifier = value
      }
    /**
     * `optional string player_identifier = 3;`
     */
    public fun clearPlayerIdentifier() {
      _builder.clearPlayerIdentifier()
    }
    /**
     * `optional string player_identifier = 3;`
     * @return Whether the playerIdentifier field is set.
     */
    public fun hasPlayerIdentifier(): kotlin.Boolean {
      return _builder.hasPlayerIdentifier()
    }

    /**
     * `optional string requesting_user_id = 4;`
     */
    public var requestingUserId: kotlin.String
      @JvmName("getRequestingUserId")
      get() = _builder.requestingUserId
      @JvmName("setRequestingUserId")
      set(value) {
        _builder.requestingUserId = value
      }
    /**
     * `optional string requesting_user_id = 4;`
     */
    public fun clearRequestingUserId() {
      _builder.clearRequestingUserId()
    }
    /**
     * `optional string requesting_user_id = 4;`
     * @return Whether the requestingUserId field is set.
     */
    public fun hasRequestingUserId(): kotlin.Boolean {
      return _builder.hasRequestingUserId()
    }

    /**
     * `optional .ei.KickPlayerCoopRequest.Reason reason = 9;`
     */
    public var reason: ei.Ei.KickPlayerCoopRequest.Reason
      @JvmName("getReason")
      get() = _builder.reason
      @JvmName("setReason")
      set(value) {
        _builder.reason = value
      }
    /**
     * `optional .ei.KickPlayerCoopRequest.Reason reason = 9;`
     */
    public fun clearReason() {
      _builder.clearReason()
    }
    /**
     * `optional .ei.KickPlayerCoopRequest.Reason reason = 9;`
     * @return Whether the reason field is set.
     */
    public fun hasReason(): kotlin.Boolean {
      return _builder.hasReason()
    }

    /**
     * `optional uint32 client_version = 7;`
     */
    public var clientVersion: kotlin.Int
      @JvmName("getClientVersion")
      get() = _builder.clientVersion
      @JvmName("setClientVersion")
      set(value) {
        _builder.clientVersion = value
      }
    /**
     * `optional uint32 client_version = 7;`
     */
    public fun clearClientVersion() {
      _builder.clearClientVersion()
    }
    /**
     * `optional uint32 client_version = 7;`
     * @return Whether the clientVersion field is set.
     */
    public fun hasClientVersion(): kotlin.Boolean {
      return _builder.hasClientVersion()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.KickPlayerCoopRequest.copy(block: `ei`.KickPlayerCoopRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.KickPlayerCoopRequest =
  `ei`.KickPlayerCoopRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.KickPlayerCoopRequestOrBuilder.rinfoOrNull: ei.Ei.BasicRequestInfo?
  get() = if (hasRinfo()) getRinfo() else null
