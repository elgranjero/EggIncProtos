// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecoopCompletionSnapshot")
public inline fun coopCompletionSnapshot(block: ei.CoopCompletionSnapshotKt.Dsl.() -> kotlin.Unit): ei.Ei.CoopCompletionSnapshot =
  ei.CoopCompletionSnapshotKt.Dsl._create(ei.Ei.CoopCompletionSnapshot.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.CoopCompletionSnapshot`
 */
public object CoopCompletionSnapshotKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.CoopCompletionSnapshot.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.CoopCompletionSnapshot.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.CoopCompletionSnapshot = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ContributorsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .ei.CoopCompletionSnapshot.ContributorSnapshot contributors = 1;`
     */
     public val contributors: com.google.protobuf.kotlin.DslList<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot, ContributorsProxy>
      @kotlin.jvm.JvmSynthetic
  get() = com.google.protobuf.kotlin.DslList(
        _builder.contributorsList
      )
    /**
     * <code>repeated .ei.CoopCompletionSnapshot.ContributorSnapshot contributors = 1;</code>
     * @param value The contributors to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("addContributors")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot, ContributorsProxy>.add(value: ei.Ei.CoopCompletionSnapshot.ContributorSnapshot) {
      _builder.addContributors(value)
    }
    /**
     * <code>repeated .ei.CoopCompletionSnapshot.ContributorSnapshot contributors = 1;</code>
     * @param value The contributors to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("plusAssignContributors")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot, ContributorsProxy>.plusAssign(value: ei.Ei.CoopCompletionSnapshot.ContributorSnapshot) {
      add(value)
    }
    /**
     * <code>repeated .ei.CoopCompletionSnapshot.ContributorSnapshot contributors = 1;</code>
     * @param values The contributors to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("addAllContributors")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot, ContributorsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot>) {
      _builder.addAllContributors(values)
    }
    /**
     * <code>repeated .ei.CoopCompletionSnapshot.ContributorSnapshot contributors = 1;</code>
     * @param values The contributors to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("plusAssignAllContributors")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot, ContributorsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot>) {
      addAll(values)
    }
    /**
     * <code>repeated .ei.CoopCompletionSnapshot.ContributorSnapshot contributors = 1;</code>
     * @param index The index to set the value at.
     * @param value The contributors to set.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("setContributors")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot, ContributorsProxy>.set(index: kotlin.Int, value: ei.Ei.CoopCompletionSnapshot.ContributorSnapshot) {
      _builder.setContributors(index, value)
    }
    /**
     * <code>repeated .ei.CoopCompletionSnapshot.ContributorSnapshot contributors = 1;</code>
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("clearContributors")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.CoopCompletionSnapshot.ContributorSnapshot, ContributorsProxy>.clear() {
      _builder.clearContributors()
    }
  }
  @kotlin.jvm.JvmName("-initializecontributorSnapshot")
  public inline fun contributorSnapshot(block: ei.CoopCompletionSnapshotKt.ContributorSnapshotKt.Dsl.() -> kotlin.Unit): ei.Ei.CoopCompletionSnapshot.ContributorSnapshot =
    ei.CoopCompletionSnapshotKt.ContributorSnapshotKt.Dsl._create(ei.Ei.CoopCompletionSnapshot.ContributorSnapshot.newBuilder()).apply { block() }._build()
  /**
   * Protobuf type `ei.CoopCompletionSnapshot.ContributorSnapshot`
   */
  public object ContributorSnapshotKt {
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    @com.google.protobuf.kotlin.ProtoDslMarker
    public class Dsl private constructor(
      private val _builder: ei.Ei.CoopCompletionSnapshot.ContributorSnapshot.Builder
    ) {
      public companion object {
        @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
        internal fun _create(builder: ei.Ei.CoopCompletionSnapshot.ContributorSnapshot.Builder): Dsl = Dsl(builder)
      }

      @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
      internal fun _build(): ei.Ei.CoopCompletionSnapshot.ContributorSnapshot = _builder.build()

      /**
       * `optional double contribution = 1;`
       */
      public var contribution: kotlin.Double
        @kotlin.jvm.JvmName("getContribution")
          get() = _builder.contribution
        @kotlin.jvm.JvmName("setContribution")
          set(value) {
          _builder.contribution = value
        }
      /**
       * <code>optional double contribution = 1;</code>
       * @return This builder for chaining.
       */
      public fun clearContribution() {
        _builder.clearContribution()
      }
      /**
       * <code>optional double contribution = 1;</code>
       * @return Whether the contribution field is set.
       * @return This builder for chaining.
       */
      public fun hasContribution(): kotlin.Boolean {
        return _builder.hasContribution()
      }

      /**
       * `optional double total_step_time = 8;`
       */
      public var totalStepTime: kotlin.Double
        @kotlin.jvm.JvmName("getTotalStepTime")
          get() = _builder.totalStepTime
        @kotlin.jvm.JvmName("setTotalStepTime")
          set(value) {
          _builder.totalStepTime = value
        }
      /**
       * <code>optional double total_step_time = 8;</code>
       * @return This builder for chaining.
       */
      public fun clearTotalStepTime() {
        _builder.clearTotalStepTime()
      }
      /**
       * <code>optional double total_step_time = 8;</code>
       * @return Whether the totalStepTime field is set.
       * @return This builder for chaining.
       */
      public fun hasTotalStepTime(): kotlin.Boolean {
        return _builder.hasTotalStepTime()
      }

      /**
       * `optional double last_contribution_time = 6;`
       */
      public var lastContributionTime: kotlin.Double
        @kotlin.jvm.JvmName("getLastContributionTime")
          get() = _builder.lastContributionTime
        @kotlin.jvm.JvmName("setLastContributionTime")
          set(value) {
          _builder.lastContributionTime = value
        }
      /**
       * <code>optional double last_contribution_time = 6;</code>
       * @return This builder for chaining.
       */
      public fun clearLastContributionTime() {
        _builder.clearLastContributionTime()
      }
      /**
       * <code>optional double last_contribution_time = 6;</code>
       * @return Whether the lastContributionTime field is set.
       * @return This builder for chaining.
       */
      public fun hasLastContributionTime(): kotlin.Boolean {
        return _builder.hasLastContributionTime()
      }

      /**
       * `optional bool finalized = 7;`
       */
      public var finalized: kotlin.Boolean
        @kotlin.jvm.JvmName("getFinalized")
          get() = _builder.finalized
        @kotlin.jvm.JvmName("setFinalized")
          set(value) {
          _builder.finalized = value
        }
      /**
       * <code>optional bool finalized = 7;</code>
       * @return This builder for chaining.
       */
      public fun clearFinalized() {
        _builder.clearFinalized()
      }
      /**
       * <code>optional bool finalized = 7;</code>
       * @return Whether the finalized field is set.
       * @return This builder for chaining.
       */
      public fun hasFinalized(): kotlin.Boolean {
        return _builder.hasFinalized()
      }

      /**
       * `optional double soul_power = 2;`
       */
      public var soulPower: kotlin.Double
        @kotlin.jvm.JvmName("getSoulPower")
          get() = _builder.soulPower
        @kotlin.jvm.JvmName("setSoulPower")
          set(value) {
          _builder.soulPower = value
        }
      /**
       * <code>optional double soul_power = 2;</code>
       * @return This builder for chaining.
       */
      public fun clearSoulPower() {
        _builder.clearSoulPower()
      }
      /**
       * <code>optional double soul_power = 2;</code>
       * @return Whether the soulPower field is set.
       * @return This builder for chaining.
       */
      public fun hasSoulPower(): kotlin.Boolean {
        return _builder.hasSoulPower()
      }

      /**
       * `optional string user_id = 3;`
       */
      public var userId: kotlin.String
        @kotlin.jvm.JvmName("getUserId")
          get() = _builder.userId
        @kotlin.jvm.JvmName("setUserId")
          set(value) {
          _builder.userId = value
        }
      /**
       * <code>optional string user_id = 3;</code>
       * @return This builder for chaining.
       */
      public fun clearUserId() {
        _builder.clearUserId()
      }
      /**
       * <code>optional string user_id = 3;</code>
       * @return Whether the userId field is set.
       * @return This builder for chaining.
       */
      public fun hasUserId(): kotlin.Boolean {
        return _builder.hasUserId()
      }

      /**
       * `optional uint32 tokens = 4;`
       */
      public var tokens: kotlin.Int
        @kotlin.jvm.JvmName("getTokens")
          get() = _builder.tokens
        @kotlin.jvm.JvmName("setTokens")
          set(value) {
          _builder.tokens = value
        }
      /**
       * <code>optional uint32 tokens = 4;</code>
       * @return This builder for chaining.
       */
      public fun clearTokens() {
        _builder.clearTokens()
      }
      /**
       * <code>optional uint32 tokens = 4;</code>
       * @return Whether the tokens field is set.
       * @return This builder for chaining.
       */
      public fun hasTokens(): kotlin.Boolean {
        return _builder.hasTokens()
      }

      /**
       * `optional uint32 tokens_spent = 5;`
       */
      public var tokensSpent: kotlin.Int
        @kotlin.jvm.JvmName("getTokensSpent")
          get() = _builder.tokensSpent
        @kotlin.jvm.JvmName("setTokensSpent")
          set(value) {
          _builder.tokensSpent = value
        }
      /**
       * <code>optional uint32 tokens_spent = 5;</code>
       * @return This builder for chaining.
       */
      public fun clearTokensSpent() {
        _builder.clearTokensSpent()
      }
      /**
       * <code>optional uint32 tokens_spent = 5;</code>
       * @return Whether the tokensSpent field is set.
       * @return This builder for chaining.
       */
      public fun hasTokensSpent(): kotlin.Boolean {
        return _builder.hasTokensSpent()
      }
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.CoopCompletionSnapshot.copy(block: `ei`.CoopCompletionSnapshotKt.Dsl.() -> kotlin.Unit): ei.Ei.CoopCompletionSnapshot =
  `ei`.CoopCompletionSnapshotKt.Dsl._create(this.toBuilder()).apply { block() }._build()

@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.CoopCompletionSnapshot.ContributorSnapshot.copy(block: `ei`.CoopCompletionSnapshotKt.ContributorSnapshotKt.Dsl.() -> kotlin.Unit): ei.Ei.CoopCompletionSnapshot.ContributorSnapshot =
  `ei`.CoopCompletionSnapshotKt.ContributorSnapshotKt.Dsl._create(this.toBuilder()).apply { block() }._build()

