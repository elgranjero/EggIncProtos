// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: ei.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package ei;

@kotlin.jvm.JvmName("-initializecontractCitation")
public inline fun contractCitation(block: ei.ContractCitationKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractCitation =
  ei.ContractCitationKt.Dsl._create(ei.Ei.ContractCitation.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `ei.ContractCitation`
 */
public object ContractCitationKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.ContractCitation.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.ContractCitation.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
  @kotlin.PublishedApi
    internal fun _build(): ei.Ei.ContractCitation = _builder.build()

    /**
     * `optional .ei.ContractEvaluation.PoorBehavior issue = 1;`
     */
    public var issue: ei.Ei.ContractEvaluation.PoorBehavior
      @kotlin.jvm.JvmName("getIssue")
        get() = _builder.issue
      @kotlin.jvm.JvmName("setIssue")
        set(value) {
        _builder.issue = value
      }
    /**
     * <code>optional .ei.ContractEvaluation.PoorBehavior issue = 1;</code>
     * @return This builder for chaining.
     */
    public fun clearIssue() {
      _builder.clearIssue()
    }
    /**
     * <code>optional .ei.ContractEvaluation.PoorBehavior issue = 1;</code>
     * @return Whether the issue field is set.
     * @return This builder for chaining.
     */
    public fun hasIssue(): kotlin.Boolean {
      return _builder.hasIssue()
    }

    /**
     * `optional double timestamp = 2;`
     */
    public var timestamp: kotlin.Double
      @kotlin.jvm.JvmName("getTimestamp")
        get() = _builder.timestamp
      @kotlin.jvm.JvmName("setTimestamp")
        set(value) {
        _builder.timestamp = value
      }
    /**
     * <code>optional double timestamp = 2;</code>
     * @return This builder for chaining.
     */
    public fun clearTimestamp() {
      _builder.clearTimestamp()
    }
    /**
     * <code>optional double timestamp = 2;</code>
     * @return Whether the timestamp field is set.
     * @return This builder for chaining.
     */
    public fun hasTimestamp(): kotlin.Boolean {
      return _builder.hasTimestamp()
    }

    /**
     * `optional .ei.Contract.PlayerGrade grade = 3;`
     */
    public var grade: ei.Ei.Contract.PlayerGrade
      @kotlin.jvm.JvmName("getGrade")
        get() = _builder.grade
      @kotlin.jvm.JvmName("setGrade")
        set(value) {
        _builder.grade = value
      }
    /**
     * <code>optional .ei.Contract.PlayerGrade grade = 3;</code>
     * @return This builder for chaining.
     */
    public fun clearGrade() {
      _builder.clearGrade()
    }
    /**
     * <code>optional .ei.Contract.PlayerGrade grade = 3;</code>
     * @return Whether the grade field is set.
     * @return This builder for chaining.
     */
    public fun hasGrade(): kotlin.Boolean {
      return _builder.hasGrade()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.ContractCitation.copy(block: `ei`.ContractCitationKt.Dsl.() -> kotlin.Unit): ei.Ei.ContractCitation =
  `ei`.ContractCitationKt.Dsl._create(this.toBuilder()).apply { block() }._build()

