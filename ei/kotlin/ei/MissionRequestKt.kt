// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializemissionRequest")
public inline fun missionRequest(block: ei.MissionRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.MissionRequest =
  ei.MissionRequestKt.Dsl._create(ei.Ei.MissionRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.MissionRequest`
 */
public object MissionRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.MissionRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.MissionRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.MissionRequest = _builder.build()

    /**
     * `optional .ei.BasicRequestInfo rinfo = 4;`
     */
    public var rinfo: ei.Ei.BasicRequestInfo
      @kotlin.jvm.JvmName("getRinfo")
        get() = _builder.rinfo
      @kotlin.jvm.JvmName("setRinfo")
        set(value) {
        _builder.rinfo = value
      }
    /**
     * <code>optional .ei.BasicRequestInfo rinfo = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearRinfo() {
      _builder.clearRinfo()
    }
    /**
     * <code>optional .ei.BasicRequestInfo rinfo = 4;</code>
     * @return Whether the rinfo field is set.
     * @return This builder for chaining.
     */
    public fun hasRinfo(): kotlin.Boolean {
      return _builder.hasRinfo()
    }

    public val MissionRequestKt.Dsl.rinfoOrNull: ei.Ei.BasicRequestInfo?
      get() = _builder.rinfoOrNull

    /**
     * `optional uint32 client_version = 1;`
     */
    public var clientVersion: kotlin.Int
      @kotlin.jvm.JvmName("getClientVersion")
        get() = _builder.clientVersion
      @kotlin.jvm.JvmName("setClientVersion")
        set(value) {
        _builder.clientVersion = value
      }
    /**
     * <code>optional uint32 client_version = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearClientVersion() {
      _builder.clearClientVersion()
    }
    /**
     * <code>optional uint32 client_version = 1;</code>
     * @return Whether the clientVersion field is set.
     * @return This builder for chaining.
     */
    public fun hasClientVersion(): kotlin.Boolean {
      return _builder.hasClientVersion()
    }

    /**
     * `optional string ei_user_id = 3;`
     */
    public var eiUserId: kotlin.String
      @kotlin.jvm.JvmName("getEiUserId")
        get() = _builder.eiUserId
      @kotlin.jvm.JvmName("setEiUserId")
        set(value) {
        _builder.eiUserId = value
      }
    /**
     * <code>optional string ei_user_id = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearEiUserId() {
      _builder.clearEiUserId()
    }
    /**
     * <code>optional string ei_user_id = 3;</code>
     * @return Whether the eiUserId field is set.
     * @return This builder for chaining.
     */
    public fun hasEiUserId(): kotlin.Boolean {
      return _builder.hasEiUserId()
    }

    /**
     * `optional .ei.MissionInfo info = 2;`
     */
    public var info: ei.Ei.MissionInfo
      @kotlin.jvm.JvmName("getInfo")
        get() = _builder.info
      @kotlin.jvm.JvmName("setInfo")
        set(value) {
        _builder.info = value
      }
    /**
     * <code>optional .ei.MissionInfo info = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearInfo() {
      _builder.clearInfo()
    }
    /**
     * <code>optional .ei.MissionInfo info = 2;</code>
     * @return Whether the info field is set.
     * @return This builder for chaining.
     */
    public fun hasInfo(): kotlin.Boolean {
      return _builder.hasInfo()
    }

    public val MissionRequestKt.Dsl.infoOrNull: ei.Ei.MissionInfo?
      get() = _builder.infoOrNull

    /**
     * `optional .ei.ArtifactsClientInfo client_info = 5;`
     */
    public var clientInfo: ei.Ei.ArtifactsClientInfo
      @kotlin.jvm.JvmName("getClientInfo")
        get() = _builder.clientInfo
      @kotlin.jvm.JvmName("setClientInfo")
        set(value) {
        _builder.clientInfo = value
      }
    /**
     * <code>optional .ei.ArtifactsClientInfo client_info = 5;</code>
     * @return This builder for chaining.
     */
    public fun clearClientInfo() {
      _builder.clearClientInfo()
    }
    /**
     * <code>optional .ei.ArtifactsClientInfo client_info = 5;</code>
     * @return Whether the clientInfo field is set.
     * @return This builder for chaining.
     */
    public fun hasClientInfo(): kotlin.Boolean {
      return _builder.hasClientInfo()
    }

    public val MissionRequestKt.Dsl.clientInfoOrNull: ei.Ei.ArtifactsClientInfo?
      get() = _builder.clientInfoOrNull
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.MissionRequest.copy(block: `ei`.MissionRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.MissionRequest =
  `ei`.MissionRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.MissionRequestOrBuilder.rinfoOrNull: ei.Ei.BasicRequestInfo?
  get() = if (hasRinfo()) getRinfo() else null

public val ei.Ei.MissionRequestOrBuilder.infoOrNull: ei.Ei.MissionInfo?
  get() = if (hasInfo()) getInfo() else null

public val ei.Ei.MissionRequestOrBuilder.clientInfoOrNull: ei.Ei.ArtifactsClientInfo?
  get() = if (hasClientInfo()) getClientInfo() else null

