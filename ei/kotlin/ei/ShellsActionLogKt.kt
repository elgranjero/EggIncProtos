// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializeshellsActionLog")
public inline fun shellsActionLog(block: ei.ShellsActionLogKt.Dsl.() -> kotlin.Unit): ei.Ei.ShellsActionLog =
  ei.ShellsActionLogKt.Dsl._create(ei.Ei.ShellsActionLog.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.ShellsActionLog`
 */
public object ShellsActionLogKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ShellsActionLog.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ShellsActionLog.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ShellsActionLog = _builder.build()

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
    public val ShellsActionLogKt.Dsl.rinfoOrNull: ei.Ei.BasicRequestInfo?
      get() = _builder.rinfoOrNull

    /**
     * `optional string user_id = 1;`
     */
    public var userId: kotlin.String
      @JvmName("getUserId")
      get() = _builder.userId
      @JvmName("setUserId")
      set(value) {
        _builder.userId = value
      }
    /**
     * `optional string user_id = 1;`
     */
    public fun clearUserId() {
      _builder.clearUserId()
    }
    /**
     * `optional string user_id = 1;`
     * @return Whether the userId field is set.
     */
    public fun hasUserId(): kotlin.Boolean {
      return _builder.hasUserId()
    }

    /**
     * `optional string action = 2;`
     */
    public var action: kotlin.String
      @JvmName("getAction")
      get() = _builder.action
      @JvmName("setAction")
      set(value) {
        _builder.action = value
      }
    /**
     * `optional string action = 2;`
     */
    public fun clearAction() {
      _builder.clearAction()
    }
    /**
     * `optional string action = 2;`
     * @return Whether the action field is set.
     */
    public fun hasAction(): kotlin.Boolean {
      return _builder.hasAction()
    }

    /**
     * `optional string sub_id = 3;`
     */
    public var subId: kotlin.String
      @JvmName("getSubId")
      get() = _builder.subId
      @JvmName("setSubId")
      set(value) {
        _builder.subId = value
      }
    /**
     * `optional string sub_id = 3;`
     */
    public fun clearSubId() {
      _builder.clearSubId()
    }
    /**
     * `optional string sub_id = 3;`
     * @return Whether the subId field is set.
     */
    public fun hasSubId(): kotlin.Boolean {
      return _builder.hasSubId()
    }

    /**
     * `optional .ei.ShellDB.FarmElement farm_element = 9;`
     */
    public var farmElement: ei.Ei.ShellDB.FarmElement
      @JvmName("getFarmElement")
      get() = _builder.farmElement
      @JvmName("setFarmElement")
      set(value) {
        _builder.farmElement = value
      }
    /**
     * `optional .ei.ShellDB.FarmElement farm_element = 9;`
     */
    public fun clearFarmElement() {
      _builder.clearFarmElement()
    }
    /**
     * `optional .ei.ShellDB.FarmElement farm_element = 9;`
     * @return Whether the farmElement field is set.
     */
    public fun hasFarmElement(): kotlin.Boolean {
      return _builder.hasFarmElement()
    }

    /**
     * `optional uint32 cost = 4;`
     */
    public var cost: kotlin.Int
      @JvmName("getCost")
      get() = _builder.cost
      @JvmName("setCost")
      set(value) {
        _builder.cost = value
      }
    /**
     * `optional uint32 cost = 4;`
     */
    public fun clearCost() {
      _builder.clearCost()
    }
    /**
     * `optional uint32 cost = 4;`
     * @return Whether the cost field is set.
     */
    public fun hasCost(): kotlin.Boolean {
      return _builder.hasCost()
    }

    /**
     * `optional double approx_time = 5;`
     */
    public var approxTime: kotlin.Double
      @JvmName("getApproxTime")
      get() = _builder.approxTime
      @JvmName("setApproxTime")
      set(value) {
        _builder.approxTime = value
      }
    /**
     * `optional double approx_time = 5;`
     */
    public fun clearApproxTime() {
      _builder.clearApproxTime()
    }
    /**
     * `optional double approx_time = 5;`
     * @return Whether the approxTime field is set.
     */
    public fun hasApproxTime(): kotlin.Boolean {
      return _builder.hasApproxTime()
    }

    /**
     * `optional string version = 6;`
     */
    public var version: kotlin.String
      @JvmName("getVersion")
      get() = _builder.version
      @JvmName("setVersion")
      set(value) {
        _builder.version = value
      }
    /**
     * `optional string version = 6;`
     */
    public fun clearVersion() {
      _builder.clearVersion()
    }
    /**
     * `optional string version = 6;`
     * @return Whether the version field is set.
     */
    public fun hasVersion(): kotlin.Boolean {
      return _builder.hasVersion()
    }

    /**
     * `optional int32 farm_index = 7;`
     */
    public var farmIndex: kotlin.Int
      @JvmName("getFarmIndex")
      get() = _builder.farmIndex
      @JvmName("setFarmIndex")
      set(value) {
        _builder.farmIndex = value
      }
    /**
     * `optional int32 farm_index = 7;`
     */
    public fun clearFarmIndex() {
      _builder.clearFarmIndex()
    }
    /**
     * `optional int32 farm_index = 7;`
     * @return Whether the farmIndex field is set.
     */
    public fun hasFarmIndex(): kotlin.Boolean {
      return _builder.hasFarmIndex()
    }

    /**
     * `optional double soul_eggs = 10;`
     */
    public var soulEggs: kotlin.Double
      @JvmName("getSoulEggs")
      get() = _builder.soulEggs
      @JvmName("setSoulEggs")
      set(value) {
        _builder.soulEggs = value
      }
    /**
     * `optional double soul_eggs = 10;`
     */
    public fun clearSoulEggs() {
      _builder.clearSoulEggs()
    }
    /**
     * `optional double soul_eggs = 10;`
     * @return Whether the soulEggs field is set.
     */
    public fun hasSoulEggs(): kotlin.Boolean {
      return _builder.hasSoulEggs()
    }

    /**
     * `optional uint64 tickets_spent = 11;`
     */
    public var ticketsSpent: kotlin.Long
      @JvmName("getTicketsSpent")
      get() = _builder.ticketsSpent
      @JvmName("setTicketsSpent")
      set(value) {
        _builder.ticketsSpent = value
      }
    /**
     * `optional uint64 tickets_spent = 11;`
     */
    public fun clearTicketsSpent() {
      _builder.clearTicketsSpent()
    }
    /**
     * `optional uint64 tickets_spent = 11;`
     * @return Whether the ticketsSpent field is set.
     */
    public fun hasTicketsSpent(): kotlin.Boolean {
      return _builder.hasTicketsSpent()
    }

    /**
     * `optional uint64 gold_spent = 12;`
     */
    public var goldSpent: kotlin.Long
      @JvmName("getGoldSpent")
      get() = _builder.goldSpent
      @JvmName("setGoldSpent")
      set(value) {
        _builder.goldSpent = value
      }
    /**
     * `optional uint64 gold_spent = 12;`
     */
    public fun clearGoldSpent() {
      _builder.clearGoldSpent()
    }
    /**
     * `optional uint64 gold_spent = 12;`
     * @return Whether the goldSpent field is set.
     */
    public fun hasGoldSpent(): kotlin.Boolean {
      return _builder.hasGoldSpent()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ShellsActionLog.copy(block: `ei`.ShellsActionLogKt.Dsl.() -> kotlin.Unit): ei.Ei.ShellsActionLog =
  `ei`.ShellsActionLogKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.ShellsActionLogOrBuilder.rinfoOrNull: ei.Ei.BasicRequestInfo?
  get() = if (hasRinfo()) getRinfo() else null
