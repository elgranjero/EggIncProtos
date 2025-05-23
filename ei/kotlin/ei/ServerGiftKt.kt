// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializeserverGift")
public inline fun serverGift(block: ei.ServerGiftKt.Dsl.() -> kotlin.Unit): ei.Ei.ServerGift =
  ei.ServerGiftKt.Dsl._create(ei.Ei.ServerGift.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.ServerGift`
 */
public object ServerGiftKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ServerGift.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ServerGift.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ServerGift = _builder.build()

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
     * `optional .ei.RewardType reward_type = 3;`
     */
    public var rewardType: ei.Ei.RewardType
      @kotlin.jvm.JvmName("getRewardType")
        get() = _builder.rewardType
      @kotlin.jvm.JvmName("setRewardType")
        set(value) {
        _builder.rewardType = value
      }
    /**
     * <code>optional .ei.RewardType reward_type = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearRewardType() {
      _builder.clearRewardType()
    }
    /**
     * <code>optional .ei.RewardType reward_type = 3;</code>
     * @return Whether the rewardType field is set.
     * @return This builder for chaining.
     */
    public fun hasRewardType(): kotlin.Boolean {
      return _builder.hasRewardType()
    }

    /**
     * `optional string reward_sub_type = 4;`
     */
    public var rewardSubType: kotlin.String
      @kotlin.jvm.JvmName("getRewardSubType")
        get() = _builder.rewardSubType
      @kotlin.jvm.JvmName("setRewardSubType")
        set(value) {
        _builder.rewardSubType = value
      }
    /**
     * <code>optional string reward_sub_type = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearRewardSubType() {
      _builder.clearRewardSubType()
    }
    /**
     * <code>optional string reward_sub_type = 4;</code>
     * @return Whether the rewardSubType field is set.
     * @return This builder for chaining.
     */
    public fun hasRewardSubType(): kotlin.Boolean {
      return _builder.hasRewardSubType()
    }

    /**
     * `optional double reward_amount = 5;`
     */
    public var rewardAmount: kotlin.Double
      @kotlin.jvm.JvmName("getRewardAmount")
        get() = _builder.rewardAmount
      @kotlin.jvm.JvmName("setRewardAmount")
        set(value) {
        _builder.rewardAmount = value
      }
    /**
     * <code>optional double reward_amount = 5;</code>
     * @return This builder for chaining.
     */
    public fun clearRewardAmount() {
      _builder.clearRewardAmount()
    }
    /**
     * <code>optional double reward_amount = 5;</code>
     * @return Whether the rewardAmount field is set.
     * @return This builder for chaining.
     */
    public fun hasRewardAmount(): kotlin.Boolean {
      return _builder.hasRewardAmount()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ServerGift.copy(block: `ei`.ServerGiftKt.Dsl.() -> kotlin.Unit): ei.Ei.ServerGift =
  `ei`.ServerGiftKt.Dsl._create(this.toBuilder()).apply { block() }._build()

