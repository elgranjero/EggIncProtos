//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmName("-initializecraftArtifactResponse")
public inline fun craftArtifactResponse(block: ei.CraftArtifactResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.CraftArtifactResponse =
  ei.CraftArtifactResponseKt.Dsl._create(ei.Ei.CraftArtifactResponse.newBuilder()).apply { block() }._build()
public object CraftArtifactResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.CraftArtifactResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.CraftArtifactResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.CraftArtifactResponse = _builder.build()

    /**
     * <code>optional uint64 item_id = 1;</code>
     */
    public var itemId: kotlin.Long
      @JvmName("getItemId")
      get() = _builder.getItemId()
      @JvmName("setItemId")
      set(value) {
        _builder.setItemId(value)
      }
    /**
     * <code>optional uint64 item_id = 1;</code>
     */
    public fun clearItemId() {
      _builder.clearItemId()
    }
    /**
     * <code>optional uint64 item_id = 1;</code>
     * @return Whether the itemId field is set.
     */
    public fun hasItemId(): kotlin.Boolean {
      return _builder.hasItemId()
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

    /**
     * <code>optional .ei.ArtifactSpec.Rarity rarity_achieved = 2 [default = COMMON];</code>
     */
    public var rarityAchieved: ei.Ei.ArtifactSpec.Rarity
      @JvmName("getRarityAchieved")
      get() = _builder.getRarityAchieved()
      @JvmName("setRarityAchieved")
      set(value) {
        _builder.setRarityAchieved(value)
      }
    /**
     * <code>optional .ei.ArtifactSpec.Rarity rarity_achieved = 2 [default = COMMON];</code>
     */
    public fun clearRarityAchieved() {
      _builder.clearRarityAchieved()
    }
    /**
     * <code>optional .ei.ArtifactSpec.Rarity rarity_achieved = 2 [default = COMMON];</code>
     * @return Whether the rarityAchieved field is set.
     */
    public fun hasRarityAchieved(): kotlin.Boolean {
      return _builder.hasRarityAchieved()
    }

    /**
     * <code>optional string server_id = 3;</code>
     */
    public var serverId: kotlin.String
      @JvmName("getServerId")
      get() = _builder.getServerId()
      @JvmName("setServerId")
      set(value) {
        _builder.setServerId(value)
      }
    /**
     * <code>optional string server_id = 3;</code>
     */
    public fun clearServerId() {
      _builder.clearServerId()
    }
    /**
     * <code>optional string server_id = 3;</code>
     * @return Whether the serverId field is set.
     */
    public fun hasServerId(): kotlin.Boolean {
      return _builder.hasServerId()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.CraftArtifactResponse.copy(block: ei.CraftArtifactResponseKt.Dsl.() -> kotlin.Unit): ei.Ei.CraftArtifactResponse =
  ei.CraftArtifactResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

