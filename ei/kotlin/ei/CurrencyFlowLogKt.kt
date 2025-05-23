// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecurrencyFlowLog")
public inline fun currencyFlowLog(block: ei.CurrencyFlowLogKt.Dsl.() -> kotlin.Unit): ei.Ei.CurrencyFlowLog =
  ei.CurrencyFlowLogKt.Dsl._create(ei.Ei.CurrencyFlowLog.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.CurrencyFlowLog`
 */
public object CurrencyFlowLogKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.CurrencyFlowLog.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.CurrencyFlowLog.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.CurrencyFlowLog = _builder.build()

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
     * `optional double approx_time = 2;`
     */
    public var approxTime: kotlin.Double
      @kotlin.jvm.JvmName("getApproxTime")
        get() = _builder.approxTime
      @kotlin.jvm.JvmName("setApproxTime")
        set(value) {
        _builder.approxTime = value
      }
    /**
     * <code>optional double approx_time = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearApproxTime() {
      _builder.clearApproxTime()
    }
    /**
     * <code>optional double approx_time = 2;</code>
     * @return Whether the approxTime field is set.
     * @return This builder for chaining.
     */
    public fun hasApproxTime(): kotlin.Boolean {
      return _builder.hasApproxTime()
    }

    /**
     * `optional .ei.RewardType currency = 3;`
     */
    public var currency: ei.Ei.RewardType
      @kotlin.jvm.JvmName("getCurrency")
        get() = _builder.currency
      @kotlin.jvm.JvmName("setCurrency")
        set(value) {
        _builder.currency = value
      }
    /**
     * <code>optional .ei.RewardType currency = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearCurrency() {
      _builder.clearCurrency()
    }
    /**
     * <code>optional .ei.RewardType currency = 3;</code>
     * @return Whether the currency field is set.
     * @return This builder for chaining.
     */
    public fun hasCurrency(): kotlin.Boolean {
      return _builder.hasCurrency()
    }

    /**
     * `optional int64 amount = 4;`
     */
    public var amount: kotlin.Long
      @kotlin.jvm.JvmName("getAmount")
        get() = _builder.amount
      @kotlin.jvm.JvmName("setAmount")
        set(value) {
        _builder.amount = value
      }
    /**
     * <code>optional int64 amount = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearAmount() {
      _builder.clearAmount()
    }
    /**
     * <code>optional int64 amount = 4;</code>
     * @return Whether the amount field is set.
     * @return This builder for chaining.
     */
    public fun hasAmount(): kotlin.Boolean {
      return _builder.hasAmount()
    }

    /**
     * `optional string location = 5;`
     */
    public var location: kotlin.String
      @kotlin.jvm.JvmName("getLocation")
        get() = _builder.location
      @kotlin.jvm.JvmName("setLocation")
        set(value) {
        _builder.location = value
      }
    /**
     * <code>optional string location = 5;</code>
     * @return This builder for chaining.
     */
    public fun clearLocation() {
      _builder.clearLocation()
    }
    /**
     * <code>optional string location = 5;</code>
     * @return Whether the location field is set.
     * @return This builder for chaining.
     */
    public fun hasLocation(): kotlin.Boolean {
      return _builder.hasLocation()
    }

    /**
     * `optional string version = 6;`
     */
    public var version: kotlin.String
      @kotlin.jvm.JvmName("getVersion")
        get() = _builder.version
      @kotlin.jvm.JvmName("setVersion")
        set(value) {
        _builder.version = value
      }
    /**
     * <code>optional string version = 6;</code>
     * @return This builder for chaining.
     */
    public fun clearVersion() {
      _builder.clearVersion()
    }
    /**
     * <code>optional string version = 6;</code>
     * @return Whether the version field is set.
     * @return This builder for chaining.
     */
    public fun hasVersion(): kotlin.Boolean {
      return _builder.hasVersion()
    }

    /**
     * `optional string platform = 7;`
     */
    public var platform: kotlin.String
      @kotlin.jvm.JvmName("getPlatform")
        get() = _builder.platform
      @kotlin.jvm.JvmName("setPlatform")
        set(value) {
        _builder.platform = value
      }
    /**
     * <code>optional string platform = 7;</code>
     * @return This builder for chaining.
     */
    public fun clearPlatform() {
      _builder.clearPlatform()
    }
    /**
     * <code>optional string platform = 7;</code>
     * @return Whether the platform field is set.
     * @return This builder for chaining.
     */
    public fun hasPlatform(): kotlin.Boolean {
      return _builder.hasPlatform()
    }

    /**
     * `optional double soul_eggs = 8;`
     */
    public var soulEggs: kotlin.Double
      @kotlin.jvm.JvmName("getSoulEggs")
        get() = _builder.soulEggs
      @kotlin.jvm.JvmName("setSoulEggs")
        set(value) {
        _builder.soulEggs = value
      }
    /**
     * <code>optional double soul_eggs = 8;</code>
     * @return This builder for chaining.
     */
    public fun clearSoulEggs() {
      _builder.clearSoulEggs()
    }
    /**
     * <code>optional double soul_eggs = 8;</code>
     * @return Whether the soulEggs field is set.
     * @return This builder for chaining.
     */
    public fun hasSoulEggs(): kotlin.Boolean {
      return _builder.hasSoulEggs()
    }

    /**
     * `optional uint64 tickets_spent = 9;`
     */
    public var ticketsSpent: kotlin.Long
      @kotlin.jvm.JvmName("getTicketsSpent")
        get() = _builder.ticketsSpent
      @kotlin.jvm.JvmName("setTicketsSpent")
        set(value) {
        _builder.ticketsSpent = value
      }
    /**
     * <code>optional uint64 tickets_spent = 9;</code>
     * @return This builder for chaining.
     */
    public fun clearTicketsSpent() {
      _builder.clearTicketsSpent()
    }
    /**
     * <code>optional uint64 tickets_spent = 9;</code>
     * @return Whether the ticketsSpent field is set.
     * @return This builder for chaining.
     */
    public fun hasTicketsSpent(): kotlin.Boolean {
      return _builder.hasTicketsSpent()
    }

    /**
     * `optional uint64 gold_spent = 10;`
     */
    public var goldSpent: kotlin.Long
      @kotlin.jvm.JvmName("getGoldSpent")
        get() = _builder.goldSpent
      @kotlin.jvm.JvmName("setGoldSpent")
        set(value) {
        _builder.goldSpent = value
      }
    /**
     * <code>optional uint64 gold_spent = 10;</code>
     * @return This builder for chaining.
     */
    public fun clearGoldSpent() {
      _builder.clearGoldSpent()
    }
    /**
     * <code>optional uint64 gold_spent = 10;</code>
     * @return Whether the goldSpent field is set.
     * @return This builder for chaining.
     */
    public fun hasGoldSpent(): kotlin.Boolean {
      return _builder.hasGoldSpent()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.CurrencyFlowLog.copy(block: `ei`.CurrencyFlowLogKt.Dsl.() -> kotlin.Unit): ei.Ei.CurrencyFlowLog =
  `ei`.CurrencyFlowLogKt.Dsl._create(this.toBuilder()).apply { block() }._build()

