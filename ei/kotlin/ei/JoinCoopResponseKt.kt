//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmSynthetic
public inline fun joinCoopResponse(block: ei.JoinCoopResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.JoinCoopResponse =
  ei.JoinCoopResponseKt.Dsl._create(ei.Ei.JoinCoopResponse.newBuilder()).apply { block() }._build()
public object JoinCoopResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.JoinCoopResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.JoinCoopResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.JoinCoopResponse = _builder.build()

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
     * <code>optional string message = 2;</code>
     */
    public var message: kotlin.String
      @JvmName("getMessage")
      get() = _builder.getMessage()
      @JvmName("setMessage")
      set(value) {
        _builder.setMessage(value)
      }
    /**
     * <code>optional string message = 2;</code>
     */
    public fun clearMessage() {
      _builder.clearMessage()
    }
    /**
     * <code>optional string message = 2;</code>
     * @return Whether the message field is set.
     */
    public fun hasMessage(): kotlin.Boolean {
      return _builder.hasMessage()
    }

    /**
     * <code>optional bool banned = 4;</code>
     */
    public var banned: kotlin.Boolean
      @JvmName("getBanned")
      get() = _builder.getBanned()
      @JvmName("setBanned")
      set(value) {
        _builder.setBanned(value)
      }
    /**
     * <code>optional bool banned = 4;</code>
     */
    public fun clearBanned() {
      _builder.clearBanned()
    }
    /**
     * <code>optional bool banned = 4;</code>
     * @return Whether the banned field is set.
     */
    public fun hasBanned(): kotlin.Boolean {
      return _builder.hasBanned()
    }

    /**
     * <code>optional string coop_identifier = 5;</code>
     */
    public var coopIdentifier: kotlin.String
      @JvmName("getCoopIdentifier")
      get() = _builder.getCoopIdentifier()
      @JvmName("setCoopIdentifier")
      set(value) {
        _builder.setCoopIdentifier(value)
      }
    /**
     * <code>optional string coop_identifier = 5;</code>
     */
    public fun clearCoopIdentifier() {
      _builder.clearCoopIdentifier()
    }
    /**
     * <code>optional string coop_identifier = 5;</code>
     * @return Whether the coopIdentifier field is set.
     */
    public fun hasCoopIdentifier(): kotlin.Boolean {
      return _builder.hasCoopIdentifier()
    }

    /**
     * <code>optional double seconds_remaining = 3;</code>
     */
    public var secondsRemaining: kotlin.Double
      @JvmName("getSecondsRemaining")
      get() = _builder.getSecondsRemaining()
      @JvmName("setSecondsRemaining")
      set(value) {
        _builder.setSecondsRemaining(value)
      }
    /**
     * <code>optional double seconds_remaining = 3;</code>
     */
    public fun clearSecondsRemaining() {
      _builder.clearSecondsRemaining()
    }
    /**
     * <code>optional double seconds_remaining = 3;</code>
     * @return Whether the secondsRemaining field is set.
     */
    public fun hasSecondsRemaining(): kotlin.Boolean {
      return _builder.hasSecondsRemaining()
    }

    /**
     * <code>optional double match_percent = 6;</code>
     */
    public var matchPercent: kotlin.Double
      @JvmName("getMatchPercent")
      get() = _builder.getMatchPercent()
      @JvmName("setMatchPercent")
      set(value) {
        _builder.setMatchPercent(value)
      }
    /**
     * <code>optional double match_percent = 6;</code>
     */
    public fun clearMatchPercent() {
      _builder.clearMatchPercent()
    }
    /**
     * <code>optional double match_percent = 6;</code>
     * @return Whether the matchPercent field is set.
     */
    public fun hasMatchPercent(): kotlin.Boolean {
      return _builder.hasMatchPercent()
    }

    /**
     * <code>optional uint32 num_members = 7;</code>
     */
    public var numMembers: kotlin.Int
      @JvmName("getNumMembers")
      get() = _builder.getNumMembers()
      @JvmName("setNumMembers")
      set(value) {
        _builder.setNumMembers(value)
      }
    /**
     * <code>optional uint32 num_members = 7;</code>
     */
    public fun clearNumMembers() {
      _builder.clearNumMembers()
    }
    /**
     * <code>optional uint32 num_members = 7;</code>
     * @return Whether the numMembers field is set.
     */
    public fun hasNumMembers(): kotlin.Boolean {
      return _builder.hasNumMembers()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.JoinCoopResponse.copy(block: ei.JoinCoopResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.JoinCoopResponse =
  ei.JoinCoopResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()
