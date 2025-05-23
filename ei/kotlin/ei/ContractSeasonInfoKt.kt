// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecontractSeasonInfo")
public inline fun contractSeasonInfo(block: ei.ContractSeasonInfoKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractSeasonInfo =
  ei.ContractSeasonInfoKt.Dsl._create(ei.Ei.ContractSeasonInfo.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.ContractSeasonInfo`
 */
public object ContractSeasonInfoKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ContractSeasonInfo.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ContractSeasonInfo.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ContractSeasonInfo = _builder.build()

    /**
     * `optional string id = 1;`
     */
    public var id: kotlin.String
      @kotlin.jvm.JvmName("getId")
        get() = _builder.id
      @kotlin.jvm.JvmName("setId")
        set(value) {
        _builder.id = value
      }
    /**
     * <code>optional string id = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearId() {
      _builder.clearId()
    }
    /**
     * <code>optional string id = 1;</code>
     * @return Whether the id field is set.
     * @return This builder for chaining.
     */
    public fun hasId(): kotlin.Boolean {
      return _builder.hasId()
    }

    /**
     * `optional string name = 3;`
     */
    public var name: kotlin.String
      @kotlin.jvm.JvmName("getName")
        get() = _builder.name
      @kotlin.jvm.JvmName("setName")
        set(value) {
        _builder.name = value
      }
    /**
     * <code>optional string name = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearName() {
      _builder.clearName()
    }
    /**
     * <code>optional string name = 3;</code>
     * @return Whether the name field is set.
     * @return This builder for chaining.
     */
    public fun hasName(): kotlin.Boolean {
      return _builder.hasName()
    }

    /**
     * `optional double start_time = 4;`
     */
    public var startTime: kotlin.Double
      @kotlin.jvm.JvmName("getStartTime")
        get() = _builder.startTime
      @kotlin.jvm.JvmName("setStartTime")
        set(value) {
        _builder.startTime = value
      }
    /**
     * <code>optional double start_time = 4;</code>
     * @return This builder for chaining.
     */
    public fun clearStartTime() {
      _builder.clearStartTime()
    }
    /**
     * <code>optional double start_time = 4;</code>
     * @return Whether the startTime field is set.
     * @return This builder for chaining.
     */
    public fun hasStartTime(): kotlin.Boolean {
      return _builder.hasStartTime()
    }

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class GradeGoalsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * `repeated .ei.ContractSeasonInfo.GoalSet grade_goals = 2;`
     */
     public val gradeGoals: com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonInfo.GoalSet, GradeGoalsProxy>
      @kotlin.jvm.JvmSynthetic
  get() = com.google.protobuf.kotlin.DslList(
        _builder.gradeGoalsList
      )
    /**
     * <code>repeated .ei.ContractSeasonInfo.GoalSet grade_goals = 2;</code>
     * @param value The gradeGoals to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("addGradeGoals")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonInfo.GoalSet, GradeGoalsProxy>.add(value: ei.Ei.ContractSeasonInfo.GoalSet) {
      _builder.addGradeGoals(value)
    }
    /**
     * <code>repeated .ei.ContractSeasonInfo.GoalSet grade_goals = 2;</code>
     * @param value The gradeGoals to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("plusAssignGradeGoals")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonInfo.GoalSet, GradeGoalsProxy>.plusAssign(value: ei.Ei.ContractSeasonInfo.GoalSet) {
      add(value)
    }
    /**
     * <code>repeated .ei.ContractSeasonInfo.GoalSet grade_goals = 2;</code>
     * @param values The gradeGoals to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("addAllGradeGoals")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonInfo.GoalSet, GradeGoalsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ContractSeasonInfo.GoalSet>) {
      _builder.addAllGradeGoals(values)
    }
    /**
     * <code>repeated .ei.ContractSeasonInfo.GoalSet grade_goals = 2;</code>
     * @param values The gradeGoals to add.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("plusAssignAllGradeGoals")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonInfo.GoalSet, GradeGoalsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ContractSeasonInfo.GoalSet>) {
      addAll(values)
    }
    /**
     * <code>repeated .ei.ContractSeasonInfo.GoalSet grade_goals = 2;</code>
     * @param index The index to set the value at.
     * @param value The gradeGoals to set.
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("setGradeGoals")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonInfo.GoalSet, GradeGoalsProxy>.set(index: kotlin.Int, value: ei.Ei.ContractSeasonInfo.GoalSet) {
      _builder.setGradeGoals(index, value)
    }
    /**
     * <code>repeated .ei.ContractSeasonInfo.GoalSet grade_goals = 2;</code>
     * @return This builder for chaining.
     */
    @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("clearGradeGoals")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonInfo.GoalSet, GradeGoalsProxy>.clear() {
      _builder.clearGradeGoals()
    }
  }
  @kotlin.jvm.JvmName("-initializegoalSet")
  public inline fun goalSet(block: ei.ContractSeasonInfoKt.GoalSetKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractSeasonInfo.GoalSet =
    ei.ContractSeasonInfoKt.GoalSetKt.Dsl._create(ei.Ei.ContractSeasonInfo.GoalSet.newBuilder()).apply { block() }._build()
  /**
   * Protobuf type `ei.ContractSeasonInfo.GoalSet`
   */
  public object GoalSetKt {
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    @com.google.protobuf.kotlin.ProtoDslMarker
    public class Dsl private constructor(
      private val _builder: ei.Ei.ContractSeasonInfo.GoalSet.Builder
    ) {
      public companion object {
        @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
        internal fun _create(builder: ei.Ei.ContractSeasonInfo.GoalSet.Builder): Dsl = Dsl(builder)
      }

      @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
      internal fun _build(): ei.Ei.ContractSeasonInfo.GoalSet = _builder.build()

      /**
       * `optional .ei.Contract.PlayerGrade grade = 1;`
       */
      public var grade: ei.Ei.Contract.PlayerGrade
        @kotlin.jvm.JvmName("getGrade")
          get() = _builder.grade
        @kotlin.jvm.JvmName("setGrade")
          set(value) {
          _builder.grade = value
        }
      /**
       * <code>optional .ei.Contract.PlayerGrade grade = 1;</code>
       * @return This builder for chaining.
       */
      public fun clearGrade() {
        _builder.clearGrade()
      }
      /**
       * <code>optional .ei.Contract.PlayerGrade grade = 1;</code>
       * @return Whether the grade field is set.
       * @return This builder for chaining.
       */
      public fun hasGrade(): kotlin.Boolean {
        return _builder.hasGrade()
      }

      /**
       * An uninstantiable, behaviorless type to represent the field in
       * generics.
       */
      @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
      public class GoalsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
      /**
       * `repeated .ei.ContractSeasonGoal goals = 2;`
       */
       public val goals: com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonGoal, GoalsProxy>
        @kotlin.jvm.JvmSynthetic
  get() = com.google.protobuf.kotlin.DslList(
          _builder.goalsList
        )
      /**
       * <code>repeated .ei.ContractSeasonGoal goals = 2;</code>
       * @param value The goals to add.
       * @return This builder for chaining.
       */
      @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("addGoals")
      public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonGoal, GoalsProxy>.add(value: ei.Ei.ContractSeasonGoal) {
        _builder.addGoals(value)
      }
      /**
       * <code>repeated .ei.ContractSeasonGoal goals = 2;</code>
       * @param value The goals to add.
       * @return This builder for chaining.
       */
      @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("plusAssignGoals")
      @Suppress("NOTHING_TO_INLINE")
      public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonGoal, GoalsProxy>.plusAssign(value: ei.Ei.ContractSeasonGoal) {
        add(value)
      }
      /**
       * <code>repeated .ei.ContractSeasonGoal goals = 2;</code>
       * @param values The goals to add.
       * @return This builder for chaining.
       */
      @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("addAllGoals")
      public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonGoal, GoalsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ContractSeasonGoal>) {
        _builder.addAllGoals(values)
      }
      /**
       * <code>repeated .ei.ContractSeasonGoal goals = 2;</code>
       * @param values The goals to add.
       * @return This builder for chaining.
       */
      @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("plusAssignAllGoals")
      @Suppress("NOTHING_TO_INLINE")
      public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonGoal, GoalsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ContractSeasonGoal>) {
        addAll(values)
      }
      /**
       * <code>repeated .ei.ContractSeasonGoal goals = 2;</code>
       * @param index The index to set the value at.
       * @param value The goals to set.
       * @return This builder for chaining.
       */
      @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("setGoals")
      public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonGoal, GoalsProxy>.set(index: kotlin.Int, value: ei.Ei.ContractSeasonGoal) {
        _builder.setGoals(index, value)
      }
      /**
       * <code>repeated .ei.ContractSeasonGoal goals = 2;</code>
       * @return This builder for chaining.
       */
      @kotlin.jvm.JvmSynthetic
@kotlin.jvm.JvmName("clearGoals")
      public fun com.google.protobuf.kotlin.DslList<ei.Ei.ContractSeasonGoal, GoalsProxy>.clear() {
        _builder.clearGoals()
      }
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ContractSeasonInfo.copy(block: `ei`.ContractSeasonInfoKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractSeasonInfo =
  `ei`.ContractSeasonInfoKt.Dsl._create(this.toBuilder()).apply { block() }._build()

@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ContractSeasonInfo.GoalSet.copy(block: `ei`.ContractSeasonInfoKt.GoalSetKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractSeasonInfo.GoalSet =
  `ei`.ContractSeasonInfoKt.GoalSetKt.Dsl._create(this.toBuilder()).apply { block() }._build()

