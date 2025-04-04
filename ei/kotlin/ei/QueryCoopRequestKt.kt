// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializequeryCoopRequest")
public inline fun queryCoopRequest(block: ei.QueryCoopRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.QueryCoopRequest =
  ei.QueryCoopRequestKt.Dsl._create(ei.Ei.QueryCoopRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.QueryCoopRequest`
 */
public object QueryCoopRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.QueryCoopRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.QueryCoopRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.QueryCoopRequest = _builder.build()

    /**
     * `optional .ei.BasicRequestInfo rinfo = 5;`
     */
    public var rinfo: ei.Ei.BasicRequestInfo
      @kotlin.jvm.JvmName("getRinfo")
        get() = _builder.rinfo
      @kotlin.jvm.JvmName("setRinfo")
        set(value) {
        _builder.rinfo = value
      }
    /**
     * <code>optional .ei.BasicRequestInfo rinfo = 5;</code>
     * @return This builder for chaining.
     */
    public fun clearRinfo() {
      _builder.clearRinfo()
    }
    /**
     * <code>optional .ei.BasicRequestInfo rinfo = 5;</code>
     * @return Whether the rinfo field is set.
     * @return This builder for chaining.
     */
    public fun hasRinfo(): kotlin.Boolean {
      return _builder.hasRinfo()
    }

    public val QueryCoopRequestKt.Dsl.rinfoOrNull: ei.Ei.BasicRequestInfo?
      get() = _builder.rinfoOrNull

    /**
     * `optional string contract_identifier = 1;`
     */
    public var contractIdentifier: kotlin.String
      @kotlin.jvm.JvmName("getContractIdentifier")
        get() = _builder.contractIdentifier
      @kotlin.jvm.JvmName("setContractIdentifier")
        set(value) {
        _builder.contractIdentifier = value
      }
    /**
     * <code>optional string contract_identifier = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearContractIdentifier() {
      _builder.clearContractIdentifier()
    }
    /**
     * <code>optional string contract_identifier = 1;</code>
     * @return Whether the contractIdentifier field is set.
     * @return This builder for chaining.
     */
    public fun hasContractIdentifier(): kotlin.Boolean {
      return _builder.hasContractIdentifier()
    }

    /**
     * `optional string coop_identifier = 2;`
     */
    public var coopIdentifier: kotlin.String
      @kotlin.jvm.JvmName("getCoopIdentifier")
        get() = _builder.coopIdentifier
      @kotlin.jvm.JvmName("setCoopIdentifier")
        set(value) {
        _builder.coopIdentifier = value
      }
    /**
     * <code>optional string coop_identifier = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearCoopIdentifier() {
      _builder.clearCoopIdentifier()
    }
    /**
     * <code>optional string coop_identifier = 2;</code>
     * @return Whether the coopIdentifier field is set.
     * @return This builder for chaining.
     */
    public fun hasCoopIdentifier(): kotlin.Boolean {
      return _builder.hasCoopIdentifier()
    }

    /**
     * `optional uint32 league = 4;`
     */
    public var league: kotlin.Int
      @kotlin.jvm.JvmName("getLeague")
        get() = _builder.league
      @kotlin.jvm.JvmName("setLeague")
        set(value) {
        _builder.league = value
      }
    /**
     * <code>optional uint32 league = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearLeague() {
      _builder.clearLeague()
    }
    /**
     * <code>optional uint32 league = 4;</code>
     * @return Whether the league field is set.
     * @return This builder for chaining.
     */
    public fun hasLeague(): kotlin.Boolean {
      return _builder.hasLeague()
    }

    /**
     * `optional .ei.Contract.PlayerGrade grade = 6;`
     */
    public var grade: ei.Ei.Contract.PlayerGrade
      @kotlin.jvm.JvmName("getGrade")
        get() = _builder.grade
      @kotlin.jvm.JvmName("setGrade")
        set(value) {
        _builder.grade = value
      }
    /**
     * <code>optional .ei.Contract.PlayerGrade grade = 6;</code>
     * @return This builder for chaining.
     */
    public fun clearGrade() {
      _builder.clearGrade()
    }
    /**
     * <code>optional .ei.Contract.PlayerGrade grade = 6;</code>
     * @return Whether the grade field is set.
     * @return This builder for chaining.
     */
    public fun hasGrade(): kotlin.Boolean {
      return _builder.hasGrade()
    }

    /**
     * `optional uint32 client_version = 3;`
     */
    public var clientVersion: kotlin.Int
      @kotlin.jvm.JvmName("getClientVersion")
        get() = _builder.clientVersion
      @kotlin.jvm.JvmName("setClientVersion")
        set(value) {
        _builder.clientVersion = value
      }
    /**
     * <code>optional uint32 client_version = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearClientVersion() {
      _builder.clearClientVersion()
    }
    /**
     * <code>optional uint32 client_version = 3;</code>
     * @return Whether the clientVersion field is set.
     * @return This builder for chaining.
     */
    public fun hasClientVersion(): kotlin.Boolean {
      return _builder.hasClientVersion()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.QueryCoopRequest.copy(block: `ei`.QueryCoopRequestKt.Dsl.() -> kotlin.Unit): ei.Ei.QueryCoopRequest =
  `ei`.QueryCoopRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.QueryCoopRequestOrBuilder.rinfoOrNull: ei.Ei.BasicRequestInfo?
  get() = if (hasRinfo()) getRinfo() else null

