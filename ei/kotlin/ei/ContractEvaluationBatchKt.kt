// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecontractEvaluationBatch")
public inline fun contractEvaluationBatch(block: ei.ContractEvaluationBatchKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractEvaluationBatch =
  ei.ContractEvaluationBatchKt.Dsl._create(ei.Ei.ContractEvaluationBatch.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.ContractEvaluationBatch`
 */
public object ContractEvaluationBatchKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ContractEvaluationBatch.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ContractEvaluationBatch.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ContractEvaluationBatch = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class EvalsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .ei.ContractEvaluationBatch.Pair evals = 1;`
     */
     public val evals: com.google.protobuf.kotlin.DslList<ei.Ei.ContractEvaluationBatch.Pair, EvalsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.evalsList
      )
    /**
     * `repeated .ei.ContractEvaluationBatch.Pair evals = 1;`
     * @param value The evals to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addEvals")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractEvaluationBatch.Pair, EvalsProxy>.add(value: ei.Ei.ContractEvaluationBatch.Pair) {
      _builder.addEvals(value)
    }
    /**
     * `repeated .ei.ContractEvaluationBatch.Pair evals = 1;`
     * @param value The evals to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignEvals")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractEvaluationBatch.Pair, EvalsProxy>.plusAssign(value: ei.Ei.ContractEvaluationBatch.Pair) {
      add(value)
    }
    /**
     * `repeated .ei.ContractEvaluationBatch.Pair evals = 1;`
     * @param values The evals to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllEvals")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractEvaluationBatch.Pair, EvalsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ContractEvaluationBatch.Pair>) {
      _builder.addAllEvals(values)
    }
    /**
     * `repeated .ei.ContractEvaluationBatch.Pair evals = 1;`
     * @param values The evals to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllEvals")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractEvaluationBatch.Pair, EvalsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ContractEvaluationBatch.Pair>) {
      addAll(values)
    }
    /**
     * `repeated .ei.ContractEvaluationBatch.Pair evals = 1;`
     * @param index The index to set the value at.
     * @param value The evals to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setEvals")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractEvaluationBatch.Pair, EvalsProxy>.set(index: kotlin.Int, value: ei.Ei.ContractEvaluationBatch.Pair) {
      _builder.setEvals(index, value)
    }
    /**
     * `repeated .ei.ContractEvaluationBatch.Pair evals = 1;`
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearEvals")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractEvaluationBatch.Pair, EvalsProxy>.clear() {
      _builder.clearEvals()
    }

  }
  @kotlin.jvm.JvmName("-initializepair")
  public inline fun pair(block: ei.ContractEvaluationBatchKt.PairKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractEvaluationBatch.Pair =
    ei.ContractEvaluationBatchKt.PairKt.Dsl._create(ei.Ei.ContractEvaluationBatch.Pair.newBuilder()).apply { block() }._build()
  /**
   * Protobuf type `ei.ContractEvaluationBatch.Pair`
   */
  public object PairKt {
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    @com.google.protobuf.kotlin.ProtoDslMarker
    public class Dsl private constructor(
      private val _builder: ei.Ei.ContractEvaluationBatch.Pair.Builder
    ) {
      public companion object {
        @kotlin.jvm.JvmSynthetic
        @kotlin.PublishedApi
        internal fun _create(builder: ei.Ei.ContractEvaluationBatch.Pair.Builder): Dsl = Dsl(builder)
      }

      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _build(): ei.Ei.ContractEvaluationBatch.Pair = _builder.build()

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
       * `optional .ei.ContractEvaluation cev = 2;`
       */
      public var cev: ei.Ei.ContractEvaluation
        @JvmName("getCev")
        get() = _builder.cev
        @JvmName("setCev")
        set(value) {
          _builder.cev = value
        }
      /**
       * `optional .ei.ContractEvaluation cev = 2;`
       */
      public fun clearCev() {
        _builder.clearCev()
      }
      /**
       * `optional .ei.ContractEvaluation cev = 2;`
       * @return Whether the cev field is set.
       */
      public fun hasCev(): kotlin.Boolean {
        return _builder.hasCev()
      }
      public val PairKt.Dsl.cevOrNull: ei.Ei.ContractEvaluation?
        get() = _builder.cevOrNull
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ContractEvaluationBatch.copy(block: `ei`.ContractEvaluationBatchKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractEvaluationBatch =
  `ei`.ContractEvaluationBatchKt.Dsl._create(this.toBuilder()).apply { block() }._build()

@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ContractEvaluationBatch.Pair.copy(block: `ei`.ContractEvaluationBatchKt.PairKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractEvaluationBatch.Pair =
  `ei`.ContractEvaluationBatchKt.PairKt.Dsl._create(this.toBuilder()).apply { block() }._build()

public val ei.Ei.ContractEvaluationBatch.PairOrBuilder.cevOrNull: ei.Ei.ContractEvaluation?
  get() = if (hasCev()) getCev() else null
