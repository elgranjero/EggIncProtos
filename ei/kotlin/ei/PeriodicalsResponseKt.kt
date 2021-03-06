//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmSynthetic
public inline fun periodicalsResponse(block: ei.PeriodicalsResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.PeriodicalsResponse =
  ei.PeriodicalsResponseKt.Dsl._create(ei.Ei.PeriodicalsResponse.newBuilder()).apply { block() }._build()
public object PeriodicalsResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.PeriodicalsResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.PeriodicalsResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.PeriodicalsResponse = _builder.build()

    /**
     * <code>optional .ei.SalesInfo sales = 1;</code>
     */
    public var sales: ei.Ei.SalesInfo
      @JvmName("getSales")
      get() = _builder.getSales()
      @JvmName("setSales")
      set(value) {
        _builder.setSales(value)
      }
    /**
     * <code>optional .ei.SalesInfo sales = 1;</code>
     */
    public fun clearSales() {
      _builder.clearSales()
    }
    /**
     * <code>optional .ei.SalesInfo sales = 1;</code>
     * @return Whether the sales field is set.
     */
    public fun hasSales(): kotlin.Boolean {
      return _builder.hasSales()
    }

    /**
     * <code>optional .ei.EggIncCurrentEvents events = 2;</code>
     */
    public var events: ei.Ei.EggIncCurrentEvents
      @JvmName("getEvents")
      get() = _builder.getEvents()
      @JvmName("setEvents")
      set(value) {
        _builder.setEvents(value)
      }
    /**
     * <code>optional .ei.EggIncCurrentEvents events = 2;</code>
     */
    public fun clearEvents() {
      _builder.clearEvents()
    }
    /**
     * <code>optional .ei.EggIncCurrentEvents events = 2;</code>
     * @return Whether the events field is set.
     */
    public fun hasEvents(): kotlin.Boolean {
      return _builder.hasEvents()
    }

    /**
     * <code>optional .ei.ContractsResponse contracts = 3;</code>
     */
    public var contracts: ei.Ei.ContractsResponse
      @JvmName("getContracts")
      get() = _builder.getContracts()
      @JvmName("setContracts")
      set(value) {
        _builder.setContracts(value)
      }
    /**
     * <code>optional .ei.ContractsResponse contracts = 3;</code>
     */
    public fun clearContracts() {
      _builder.clearContracts()
    }
    /**
     * <code>optional .ei.ContractsResponse contracts = 3;</code>
     * @return Whether the contracts field is set.
     */
    public fun hasContracts(): kotlin.Boolean {
      return _builder.hasContracts()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class GiftsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.ServerGift gifts = 4;</code>
     */
     public val gifts: com.google.protobuf.kotlin.DslList<ei.Ei.ServerGift, GiftsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getGiftsList()
      )
    /**
     * <code>repeated .ei.ServerGift gifts = 4;</code>
     * @param value The gifts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addGifts")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ServerGift, GiftsProxy>.add(value: ei.Ei.ServerGift) {
      _builder.addGifts(value)
    }/**
     * <code>repeated .ei.ServerGift gifts = 4;</code>
     * @param value The gifts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignGifts")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ServerGift, GiftsProxy>.plusAssign(value: ei.Ei.ServerGift) {
      add(value)
    }/**
     * <code>repeated .ei.ServerGift gifts = 4;</code>
     * @param values The gifts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllGifts")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ServerGift, GiftsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ServerGift>) {
      _builder.addAllGifts(values)
    }/**
     * <code>repeated .ei.ServerGift gifts = 4;</code>
     * @param values The gifts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllGifts")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ServerGift, GiftsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ServerGift>) {
      addAll(values)
    }/**
     * <code>repeated .ei.ServerGift gifts = 4;</code>
     * @param index The index to set the value at.
     * @param value The gifts to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setGifts")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ServerGift, GiftsProxy>.set(index: kotlin.Int, value: ei.Ei.ServerGift) {
      _builder.setGifts(index, value)
    }/**
     * <code>repeated .ei.ServerGift gifts = 4;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearGifts")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ServerGift, GiftsProxy>.clear() {
      _builder.clearGifts()
    }
    /**
     * <code>optional .ei.LiveConfig live_config = 5;</code>
     */
    public var liveConfig: ei.Ei.LiveConfig
      @JvmName("getLiveConfig")
      get() = _builder.getLiveConfig()
      @JvmName("setLiveConfig")
      set(value) {
        _builder.setLiveConfig(value)
      }
    /**
     * <code>optional .ei.LiveConfig live_config = 5;</code>
     */
    public fun clearLiveConfig() {
      _builder.clearLiveConfig()
    }
    /**
     * <code>optional .ei.LiveConfig live_config = 5;</code>
     * @return Whether the liveConfig field is set.
     */
    public fun hasLiveConfig(): kotlin.Boolean {
      return _builder.hasLiveConfig()
    }

    /**
     * <code>optional .ei.MailDB mail_bag = 6;</code>
     */
    public var mailBag: ei.Ei.MailDB
      @JvmName("getMailBag")
      get() = _builder.getMailBag()
      @JvmName("setMailBag")
      set(value) {
        _builder.setMailBag(value)
      }
    /**
     * <code>optional .ei.MailDB mail_bag = 6;</code>
     */
    public fun clearMailBag() {
      _builder.clearMailBag()
    }
    /**
     * <code>optional .ei.MailDB mail_bag = 6;</code>
     * @return Whether the mailBag field is set.
     */
    public fun hasMailBag(): kotlin.Boolean {
      return _builder.hasMailBag()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.PeriodicalsResponse.copy(block: ei.PeriodicalsResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.PeriodicalsResponse =
  ei.PeriodicalsResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
