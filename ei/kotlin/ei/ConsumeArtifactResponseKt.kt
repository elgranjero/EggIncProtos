//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmSynthetic
public inline fun consumeArtifactResponse(block: ei.ConsumeArtifactResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.ConsumeArtifactResponse =
  ei.ConsumeArtifactResponseKt.Dsl._create(ei.Ei.ConsumeArtifactResponse.newBuilder()).apply { block() }._build()
public object ConsumeArtifactResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ConsumeArtifactResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ConsumeArtifactResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ConsumeArtifactResponse = _builder.build()

    /**
     * <code>optional bool success = 1;</code>
     */
    public var success: kotlin.Boolean
      @JvmName("getSuccess")
      get() = _builder.getSuccess()
      @JvmName("setSuccess")
      set(value) {
        _builder.setSuccess(value)
      }
    /**
     * <code>optional bool success = 1;</code>
     */
    public fun clearSuccess() {
      _builder.clearSuccess()
    }
    /**
     * <code>optional bool success = 1;</code>
     * @return Whether the success field is set.
     */
    public fun hasSuccess(): kotlin.Boolean {
      return _builder.hasSuccess()
    }

    /**
     * <code>optional uint64 original_item_id = 2;</code>
     */
    public var originalItemId: kotlin.Long
      @JvmName("getOriginalItemId")
      get() = _builder.getOriginalItemId()
      @JvmName("setOriginalItemId")
      set(value) {
        _builder.setOriginalItemId(value)
      }
    /**
     * <code>optional uint64 original_item_id = 2;</code>
     */
    public fun clearOriginalItemId() {
      _builder.clearOriginalItemId()
    }
    /**
     * <code>optional uint64 original_item_id = 2;</code>
     * @return Whether the originalItemId field is set.
     */
    public fun hasOriginalItemId(): kotlin.Boolean {
      return _builder.hasOriginalItemId()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ByproductsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.ArtifactSpec byproducts = 3;</code>
     */
     public val byproducts: com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, ByproductsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getByproductsList()
      )
    /**
     * <code>repeated .ei.ArtifactSpec byproducts = 3;</code>
     * @param value The byproducts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addByproducts")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, ByproductsProxy>.add(value: ei.Ei.ArtifactSpec) {
      _builder.addByproducts(value)
    }/**
     * <code>repeated .ei.ArtifactSpec byproducts = 3;</code>
     * @param value The byproducts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignByproducts")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, ByproductsProxy>.plusAssign(value: ei.Ei.ArtifactSpec) {
      add(value)
    }/**
     * <code>repeated .ei.ArtifactSpec byproducts = 3;</code>
     * @param values The byproducts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllByproducts")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, ByproductsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ArtifactSpec>) {
      _builder.addAllByproducts(values)
    }/**
     * <code>repeated .ei.ArtifactSpec byproducts = 3;</code>
     * @param values The byproducts to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllByproducts")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, ByproductsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ArtifactSpec>) {
      addAll(values)
    }/**
     * <code>repeated .ei.ArtifactSpec byproducts = 3;</code>
     * @param index The index to set the value at.
     * @param value The byproducts to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setByproducts")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, ByproductsProxy>.set(index: kotlin.Int, value: ei.Ei.ArtifactSpec) {
      _builder.setByproducts(index, value)
    }/**
     * <code>repeated .ei.ArtifactSpec byproducts = 3;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearByproducts")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ArtifactSpec, ByproductsProxy>.clear() {
      _builder.clearByproducts()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class OtherRewardsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.Reward other_rewards = 4;</code>
     */
     public val otherRewards: com.google.protobuf.kotlin.DslList<ei.Ei.Reward, OtherRewardsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getOtherRewardsList()
      )
    /**
     * <code>repeated .ei.Reward other_rewards = 4;</code>
     * @param value The otherRewards to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addOtherRewards")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.Reward, OtherRewardsProxy>.add(value: ei.Ei.Reward) {
      _builder.addOtherRewards(value)
    }/**
     * <code>repeated .ei.Reward other_rewards = 4;</code>
     * @param value The otherRewards to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignOtherRewards")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.Reward, OtherRewardsProxy>.plusAssign(value: ei.Ei.Reward) {
      add(value)
    }/**
     * <code>repeated .ei.Reward other_rewards = 4;</code>
     * @param values The otherRewards to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllOtherRewards")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.Reward, OtherRewardsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.Reward>) {
      _builder.addAllOtherRewards(values)
    }/**
     * <code>repeated .ei.Reward other_rewards = 4;</code>
     * @param values The otherRewards to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllOtherRewards")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.Reward, OtherRewardsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.Reward>) {
      addAll(values)
    }/**
     * <code>repeated .ei.Reward other_rewards = 4;</code>
     * @param index The index to set the value at.
     * @param value The otherRewards to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setOtherRewards")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.Reward, OtherRewardsProxy>.set(index: kotlin.Int, value: ei.Ei.Reward) {
      _builder.setOtherRewards(index, value)
    }/**
     * <code>repeated .ei.Reward other_rewards = 4;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearOtherRewards")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.Reward, OtherRewardsProxy>.clear() {
      _builder.clearOtherRewards()
    }
    /**
     * <code>optional string ei_user_id = 5;</code>
     */
    public var eiUserId: kotlin.String
      @JvmName("getEiUserId")
      get() = _builder.getEiUserId()
      @JvmName("setEiUserId")
      set(value) {
        _builder.setEiUserId(value)
      }
    /**
     * <code>optional string ei_user_id = 5;</code>
     */
    public fun clearEiUserId() {
      _builder.clearEiUserId()
    }
    /**
     * <code>optional string ei_user_id = 5;</code>
     * @return Whether the eiUserId field is set.
     */
    public fun hasEiUserId(): kotlin.Boolean {
      return _builder.hasEiUserId()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ConsumeArtifactResponse.copy(block: ei.ConsumeArtifactResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.ConsumeArtifactResponse =
  ei.ConsumeArtifactResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()