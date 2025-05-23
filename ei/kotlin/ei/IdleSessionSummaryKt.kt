// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializeidleSessionSummary")
public inline fun idleSessionSummary(block: ei.IdleSessionSummaryKt.Dsl.() -> kotlin.Unit): ei.Ei.IdleSessionSummary =
  ei.IdleSessionSummaryKt.Dsl._create(ei.Ei.IdleSessionSummary.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.IdleSessionSummary`
 */
public object IdleSessionSummaryKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.IdleSessionSummary.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.IdleSessionSummary.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.IdleSessionSummary = _builder.build()

    /**
     * `optional bool success = 11;`
     */
    public var success: kotlin.Boolean
      @kotlin.jvm.JvmName("getSuccess")
        get() = _builder.success
      @kotlin.jvm.JvmName("setSuccess")
        set(value) {
        _builder.success = value
      }
    /**
     * <code>optional bool success = 11;</code>
     * @return This builder for chaining.
     */
    public fun clearSuccess() {
      _builder.clearSuccess()
    }
    /**
     * <code>optional bool success = 11;</code>
     * @return Whether the success field is set.
     * @return This builder for chaining.
     */
    public fun hasSuccess(): kotlin.Boolean {
      return _builder.hasSuccess()
    }

    /**
     * `optional double time_away = 1;`
     */
    public var timeAway: kotlin.Double
      @kotlin.jvm.JvmName("getTimeAway")
        get() = _builder.timeAway
      @kotlin.jvm.JvmName("setTimeAway")
        set(value) {
        _builder.timeAway = value
      }
    /**
     * <code>optional double time_away = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearTimeAway() {
      _builder.clearTimeAway()
    }
    /**
     * <code>optional double time_away = 1;</code>
     * @return Whether the timeAway field is set.
     * @return This builder for chaining.
     */
    public fun hasTimeAway(): kotlin.Boolean {
      return _builder.hasTimeAway()
    }

    /**
     * `optional double time_simulated = 2;`
     */
    public var timeSimulated: kotlin.Double
      @kotlin.jvm.JvmName("getTimeSimulated")
        get() = _builder.timeSimulated
      @kotlin.jvm.JvmName("setTimeSimulated")
        set(value) {
        _builder.timeSimulated = value
      }
    /**
     * <code>optional double time_simulated = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearTimeSimulated() {
      _builder.clearTimeSimulated()
    }
    /**
     * <code>optional double time_simulated = 2;</code>
     * @return Whether the timeSimulated field is set.
     * @return This builder for chaining.
     */
    public fun hasTimeSimulated(): kotlin.Boolean {
      return _builder.hasTimeSimulated()
    }

    /**
     * `optional uint32 silos_owned = 3;`
     */
    public var silosOwned: kotlin.Int
      @kotlin.jvm.JvmName("getSilosOwned")
        get() = _builder.silosOwned
      @kotlin.jvm.JvmName("setSilosOwned")
        set(value) {
        _builder.silosOwned = value
      }
    /**
     * <code>optional uint32 silos_owned = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearSilosOwned() {
      _builder.clearSilosOwned()
    }
    /**
     * <code>optional uint32 silos_owned = 3;</code>
     * @return Whether the silosOwned field is set.
     * @return This builder for chaining.
     */
    public fun hasSilosOwned(): kotlin.Boolean {
      return _builder.hasSilosOwned()
    }

    /**
     * `optional double average_elr = 4;`
     */
    public var averageElr: kotlin.Double
      @kotlin.jvm.JvmName("getAverageElr")
        get() = _builder.averageElr
      @kotlin.jvm.JvmName("setAverageElr")
        set(value) {
        _builder.averageElr = value
      }
    /**
     * <code>optional double average_elr = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearAverageElr() {
      _builder.clearAverageElr()
    }
    /**
     * <code>optional double average_elr = 4;</code>
     * @return Whether the averageElr field is set.
     * @return This builder for chaining.
     */
    public fun hasAverageElr(): kotlin.Boolean {
      return _builder.hasAverageElr()
    }

    /**
     * `optional double average_msr = 5;`
     */
    public var averageMsr: kotlin.Double
      @kotlin.jvm.JvmName("getAverageMsr")
        get() = _builder.averageMsr
      @kotlin.jvm.JvmName("setAverageMsr")
        set(value) {
        _builder.averageMsr = value
      }
    /**
     * <code>optional double average_msr = 5;</code>
     * @return This builder for chaining.
     */
    public fun clearAverageMsr() {
      _builder.clearAverageMsr()
    }
    /**
     * <code>optional double average_msr = 5;</code>
     * @return Whether the averageMsr field is set.
     * @return This builder for chaining.
     */
    public fun hasAverageMsr(): kotlin.Boolean {
      return _builder.hasAverageMsr()
    }

    /**
     * `optional double average_egg_delivery_rate = 6;`
     */
    public var averageEggDeliveryRate: kotlin.Double
      @kotlin.jvm.JvmName("getAverageEggDeliveryRate")
        get() = _builder.averageEggDeliveryRate
      @kotlin.jvm.JvmName("setAverageEggDeliveryRate")
        set(value) {
        _builder.averageEggDeliveryRate = value
      }
    /**
     * <code>optional double average_egg_delivery_rate = 6;</code>
     * @return This builder for chaining.
     */
    public fun clearAverageEggDeliveryRate() {
      _builder.clearAverageEggDeliveryRate()
    }
    /**
     * <code>optional double average_egg_delivery_rate = 6;</code>
     * @return Whether the averageEggDeliveryRate field is set.
     * @return This builder for chaining.
     */
    public fun hasAverageEggDeliveryRate(): kotlin.Boolean {
      return _builder.hasAverageEggDeliveryRate()
    }

    /**
     * `optional double last_egg_delivery_rate = 8;`
     */
    public var lastEggDeliveryRate: kotlin.Double
      @kotlin.jvm.JvmName("getLastEggDeliveryRate")
        get() = _builder.lastEggDeliveryRate
      @kotlin.jvm.JvmName("setLastEggDeliveryRate")
        set(value) {
        _builder.lastEggDeliveryRate = value
      }
    /**
     * <code>optional double last_egg_delivery_rate = 8;</code>
     * @return This builder for chaining.
     */
    public fun clearLastEggDeliveryRate() {
      _builder.clearLastEggDeliveryRate()
    }
    /**
     * <code>optional double last_egg_delivery_rate = 8;</code>
     * @return Whether the lastEggDeliveryRate field is set.
     * @return This builder for chaining.
     */
    public fun hasLastEggDeliveryRate(): kotlin.Boolean {
      return _builder.hasLastEggDeliveryRate()
    }

    /**
     * `optional double eggs_delivered = 9;`
     */
    public var eggsDelivered: kotlin.Double
      @kotlin.jvm.JvmName("getEggsDelivered")
        get() = _builder.eggsDelivered
      @kotlin.jvm.JvmName("setEggsDelivered")
        set(value) {
        _builder.eggsDelivered = value
      }
    /**
     * <code>optional double eggs_delivered = 9;</code>
     * @return This builder for chaining.
     */
    public fun clearEggsDelivered() {
      _builder.clearEggsDelivered()
    }
    /**
     * <code>optional double eggs_delivered = 9;</code>
     * @return Whether the eggsDelivered field is set.
     * @return This builder for chaining.
     */
    public fun hasEggsDelivered(): kotlin.Boolean {
      return _builder.hasEggsDelivered()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class StatsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .ei.IdleSessionSummary.Stat stats = 10;`
     */
     public val stats: com.google.protobuf.kotlin.DslList<ei.Ei.IdleSessionSummary.Stat, StatsProxy>
      @kotlin.jvm.JvmSynthetic
  get() = com.google.protobuf.kotlin.DslList(
        _builder.statsList
      )
    /**
     * <code>repeated .ei.IdleSessionSummary.Stat stats = 10;</code>
     * @param value The stats to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("addStats")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.IdleSessionSummary.Stat, StatsProxy>.add(value: ei.Ei.IdleSessionSummary.Stat) {
      _builder.addStats(value)
    }
    /**
     * <code>repeated .ei.IdleSessionSummary.Stat stats = 10;</code>
     * @param value The stats to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("plusAssignStats")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.IdleSessionSummary.Stat, StatsProxy>.plusAssign(value: ei.Ei.IdleSessionSummary.Stat) {
      add(value)
    }
    /**
     * <code>repeated .ei.IdleSessionSummary.Stat stats = 10;</code>
     * @param values The stats to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("addAllStats")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.IdleSessionSummary.Stat, StatsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.IdleSessionSummary.Stat>) {
      _builder.addAllStats(values)
    }
    /**
     * <code>repeated .ei.IdleSessionSummary.Stat stats = 10;</code>
     * @param values The stats to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("plusAssignAllStats")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.IdleSessionSummary.Stat, StatsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.IdleSessionSummary.Stat>) {
      addAll(values)
    }
    /**
     * <code>repeated .ei.IdleSessionSummary.Stat stats = 10;</code>
     * @param index The index to set the value at.
     * @param value The stats to set.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("setStats")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.IdleSessionSummary.Stat, StatsProxy>.set(index: kotlin.Int, value: ei.Ei.IdleSessionSummary.Stat) {
      _builder.setStats(index, value)
    }
    /**
     * <code>repeated .ei.IdleSessionSummary.Stat stats = 10;</code>
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("clearStats")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.IdleSessionSummary.Stat, StatsProxy>.clear() {
      _builder.clearStats()
    }

    /**
     * `optional uint32 farm_index = 7;`
     */
    public var farmIndex: kotlin.Int
      @kotlin.jvm.JvmName("getFarmIndex")
        get() = _builder.farmIndex
      @kotlin.jvm.JvmName("setFarmIndex")
        set(value) {
        _builder.farmIndex = value
      }
    /**
     * <code>optional uint32 farm_index = 7;</code>
     * @return This builder for chaining.
     */
    public fun clearFarmIndex() {
      _builder.clearFarmIndex()
    }
    /**
     * <code>optional uint32 farm_index = 7;</code>
     * @return Whether the farmIndex field is set.
     * @return This builder for chaining.
     */
    public fun hasFarmIndex(): kotlin.Boolean {
      return _builder.hasFarmIndex()
    }
  }
  @kotlin.jvm.JvmName("-initializestat")
  public inline fun stat(block: ei.IdleSessionSummaryKt.StatKt.Dsl.() -> kotlin.Unit): ei.Ei.IdleSessionSummary.Stat =
    ei.IdleSessionSummaryKt.StatKt.Dsl._create(ei.Ei.IdleSessionSummary.Stat.newBuilder()).apply { block() }._build()
  /**
   * Protobuf type `ei.IdleSessionSummary.Stat`
   */
  public object StatKt {
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    @com.google.protobuf.kotlin.ProtoDslMarker
    public class Dsl private constructor(
      private val _builder: ei.Ei.IdleSessionSummary.Stat.Builder
    ) {
      public companion object {
        @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
        internal fun _create(builder: ei.Ei.IdleSessionSummary.Stat.Builder): Dsl = Dsl(builder)
      }

      @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
      internal fun _build(): ei.Ei.IdleSessionSummary.Stat = _builder.build()

      /**
       * `optional string name = 1;`
       */
      public var name: kotlin.String
        @kotlin.jvm.JvmName("getName")
          get() = _builder.name
        @kotlin.jvm.JvmName("setName")
          set(value) {
          _builder.name = value
        }
      /**
       * <code>optional string name = 1;</code>
       * @return This builder for chaining.
       */
      public fun clearName() {
        _builder.clearName()
      }
      /**
       * <code>optional string name = 1;</code>
       * @return Whether the name field is set.
       * @return This builder for chaining.
       */
      public fun hasName(): kotlin.Boolean {
        return _builder.hasName()
      }

      /**
       * `optional double min = 2;`
       */
      public var min: kotlin.Double
        @kotlin.jvm.JvmName("getMin")
          get() = _builder.min
        @kotlin.jvm.JvmName("setMin")
          set(value) {
          _builder.min = value
        }
      /**
       * <code>optional double min = 2;</code>
       * @return This builder for chaining.
       */
      public fun clearMin() {
        _builder.clearMin()
      }
      /**
       * <code>optional double min = 2;</code>
       * @return Whether the min field is set.
       * @return This builder for chaining.
       */
      public fun hasMin(): kotlin.Boolean {
        return _builder.hasMin()
      }

      /**
       * `optional double max = 3;`
       */
      public var max: kotlin.Double
        @kotlin.jvm.JvmName("getMax")
          get() = _builder.max
        @kotlin.jvm.JvmName("setMax")
          set(value) {
          _builder.max = value
        }
      /**
       * <code>optional double max = 3;</code>
       * @return This builder for chaining.
       */
      public fun clearMax() {
        _builder.clearMax()
      }
      /**
       * <code>optional double max = 3;</code>
       * @return Whether the max field is set.
       * @return This builder for chaining.
       */
      public fun hasMax(): kotlin.Boolean {
        return _builder.hasMax()
      }

      /**
       * `optional double avg = 4;`
       */
      public var avg: kotlin.Double
        @kotlin.jvm.JvmName("getAvg")
          get() = _builder.avg
        @kotlin.jvm.JvmName("setAvg")
          set(value) {
          _builder.avg = value
        }
      /**
       * <code>optional double avg = 4;</code>
       * @return This builder for chaining.
       */
      public fun clearAvg() {
        _builder.clearAvg()
      }
      /**
       * <code>optional double avg = 4;</code>
       * @return Whether the avg field is set.
       * @return This builder for chaining.
       */
      public fun hasAvg(): kotlin.Boolean {
        return _builder.hasAvg()
      }

      /**
       * `optional double total_time = 5;`
       */
      public var totalTime: kotlin.Double
        @kotlin.jvm.JvmName("getTotalTime")
          get() = _builder.totalTime
        @kotlin.jvm.JvmName("setTotalTime")
          set(value) {
          _builder.totalTime = value
        }
      /**
       * <code>optional double total_time = 5;</code>
       * @return This builder for chaining.
       */
      public fun clearTotalTime() {
        _builder.clearTotalTime()
      }
      /**
       * <code>optional double total_time = 5;</code>
       * @return Whether the totalTime field is set.
       * @return This builder for chaining.
       */
      public fun hasTotalTime(): kotlin.Boolean {
        return _builder.hasTotalTime()
      }
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.IdleSessionSummary.copy(block: `ei`.IdleSessionSummaryKt.Dsl.() -> kotlin.Unit): ei.Ei.IdleSessionSummary =
  `ei`.IdleSessionSummaryKt.Dsl._create(this.toBuilder()).apply { block() }._build()

@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.IdleSessionSummary.Stat.copy(block: `ei`.IdleSessionSummaryKt.StatKt.Dsl.() -> kotlin.Unit): ei.Ei.IdleSessionSummary.Stat =
  `ei`.IdleSessionSummaryKt.StatKt.Dsl._create(this.toBuilder()).apply { block() }._build()

