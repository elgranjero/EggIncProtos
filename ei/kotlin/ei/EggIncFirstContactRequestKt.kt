// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializeeggIncFirstContactRequest")
public inline fun eggIncFirstContactRequest(block: ei.EggIncFirstContactRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.EggIncFirstContactRequest =
  ei.EggIncFirstContactRequestKt.Dsl._create(ei.Ei.EggIncFirstContactRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.EggIncFirstContactRequest`
 */
public object EggIncFirstContactRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.EggIncFirstContactRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.EggIncFirstContactRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.EggIncFirstContactRequest = _builder.build()

    /**
     * `optional .ei.BasicRequestInfo rinfo = 8;`
     */
    public var rinfo: ei.Ei.BasicRequestInfo
      @kotlin.jvm.JvmName("getRinfo")
        get() = _builder.rinfo
      @kotlin.jvm.JvmName("setRinfo")
        set(value) {
        _builder.rinfo = value
      }
    /**
     * <code>optional .ei.BasicRequestInfo rinfo = 8;</code>
     * @return This builder for chaining.
     */
    public fun clearRinfo() {
      _builder.clearRinfo()
    }
    /**
     * <code>optional .ei.BasicRequestInfo rinfo = 8;</code>
     * @return Whether the rinfo field is set.
     * @return This builder for chaining.
     */
    public fun hasRinfo(): kotlin.Boolean {
      return _builder.hasRinfo()
    }

    public val EggIncFirstContactRequestKt.Dsl.rinfoOrNull: ei.Ei.BasicRequestInfo?
      get() = _builder.rinfoOrNull

    /**
     * `optional string ei_user_id = 4;`
     */
    public var eiUserId: kotlin.String
      @kotlin.jvm.JvmName("getEiUserId")
        get() = _builder.eiUserId
      @kotlin.jvm.JvmName("setEiUserId")
        set(value) {
        _builder.eiUserId = value
      }
    /**
     * <code>optional string ei_user_id = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearEiUserId() {
      _builder.clearEiUserId()
    }
    /**
     * <code>optional string ei_user_id = 4;</code>
     * @return Whether the eiUserId field is set.
     * @return This builder for chaining.
     */
    public fun hasEiUserId(): kotlin.Boolean {
      return _builder.hasEiUserId()
    }

    /**
     * `optional string user_id = 1;`
     */
    public var userId: kotlin.String
      @kotlin.jvm.JvmName("getUserId")
        get() = _builder.userId
      @kotlin.jvm.JvmName("setUserId")
        set(value) {
        _builder.userId = value
      }
    /**
     * <code>optional string user_id = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearUserId() {
      _builder.clearUserId()
    }
    /**
     * <code>optional string user_id = 1;</code>
     * @return Whether the userId field is set.
     * @return This builder for chaining.
     */
    public fun hasUserId(): kotlin.Boolean {
      return _builder.hasUserId()
    }

    /**
     * `optional string game_services_id = 7;`
     */
    public var gameServicesId: kotlin.String
      @kotlin.jvm.JvmName("getGameServicesId")
        get() = _builder.gameServicesId
      @kotlin.jvm.JvmName("setGameServicesId")
        set(value) {
        _builder.gameServicesId = value
      }
    /**
     * <code>optional string game_services_id = 7;</code>
     * @return This builder for chaining.
     */
    public fun clearGameServicesId() {
      _builder.clearGameServicesId()
    }
    /**
     * <code>optional string game_services_id = 7;</code>
     * @return Whether the gameServicesId field is set.
     * @return This builder for chaining.
     */
    public fun hasGameServicesId(): kotlin.Boolean {
      return _builder.hasGameServicesId()
    }

    /**
     * `optional string device_id = 5;`
     */
    public var deviceId: kotlin.String
      @kotlin.jvm.JvmName("getDeviceId")
        get() = _builder.deviceId
      @kotlin.jvm.JvmName("setDeviceId")
        set(value) {
        _builder.deviceId = value
      }
    /**
     * <code>optional string device_id = 5;</code>
     * @return This builder for chaining.
     */
    public fun clearDeviceId() {
      _builder.clearDeviceId()
    }
    /**
     * <code>optional string device_id = 5;</code>
     * @return Whether the deviceId field is set.
     * @return This builder for chaining.
     */
    public fun hasDeviceId(): kotlin.Boolean {
      return _builder.hasDeviceId()
    }

    /**
     * `optional string username = 6;`
     */
    public var username: kotlin.String
      @kotlin.jvm.JvmName("getUsername")
        get() = _builder.username
      @kotlin.jvm.JvmName("setUsername")
        set(value) {
        _builder.username = value
      }
    /**
     * <code>optional string username = 6;</code>
     * @return This builder for chaining.
     */
    public fun clearUsername() {
      _builder.clearUsername()
    }
    /**
     * <code>optional string username = 6;</code>
     * @return Whether the username field is set.
     * @return This builder for chaining.
     */
    public fun hasUsername(): kotlin.Boolean {
      return _builder.hasUsername()
    }

    /**
     * `optional uint32 client_version = 2;`
     */
    public var clientVersion: kotlin.Int
      @kotlin.jvm.JvmName("getClientVersion")
        get() = _builder.clientVersion
      @kotlin.jvm.JvmName("setClientVersion")
        set(value) {
        _builder.clientVersion = value
      }
    /**
     * <code>optional uint32 client_version = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearClientVersion() {
      _builder.clearClientVersion()
    }
    /**
     * <code>optional uint32 client_version = 2;</code>
     * @return Whether the clientVersion field is set.
     * @return This builder for chaining.
     */
    public fun hasClientVersion(): kotlin.Boolean {
      return _builder.hasClientVersion()
    }

    /**
     * `optional .ei.Platform platform = 3;`
     */
    public var platform: ei.Ei.Platform
      @kotlin.jvm.JvmName("getPlatform")
        get() = _builder.platform
      @kotlin.jvm.JvmName("setPlatform")
        set(value) {
        _builder.platform = value
      }
    /**
     * <code>optional .ei.Platform platform = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearPlatform() {
      _builder.clearPlatform()
    }
    /**
     * <code>optional .ei.Platform platform = 3;</code>
     * @return Whether the platform field is set.
     * @return This builder for chaining.
     */
    public fun hasPlatform(): kotlin.Boolean {
      return _builder.hasPlatform()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.EggIncFirstContactRequest.copy(block: `ei`.EggIncFirstContactRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.EggIncFirstContactRequest =
  `ei`.EggIncFirstContactRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.EggIncFirstContactRequestOrBuilder.rinfoOrNull: ei.Ei.BasicRequestInfo?
  get() = if (hasRinfo()) getRinfo() else null

