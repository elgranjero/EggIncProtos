//Generated by the protocol buffer compiler. DO NOT EDIT!
// source: ei.proto

package ei;

@kotlin.jvm.JvmSynthetic
public inline fun dLCCatalog(block: ei.DLCCatalogKt.Dsl.() -> kotlin.Unit): ei.Ei.DLCCatalog =
  ei.DLCCatalogKt.Dsl._create(ei.Ei.DLCCatalog.newBuilder()).apply { block() }._build()
public object DLCCatalogKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: ei.Ei.DLCCatalog.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: ei.Ei.DLCCatalog.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): ei.Ei.DLCCatalog = _builder.build()

    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ItemsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.DLCItem items = 1;</code>
     */
     public val items: com.google.protobuf.kotlin.DslList<ei.Ei.DLCItem, ItemsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getItemsList()
      )
    /**
     * <code>repeated .ei.DLCItem items = 1;</code>
     * @param value The items to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addItems")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.DLCItem, ItemsProxy>.add(value: ei.Ei.DLCItem) {
      _builder.addItems(value)
    }/**
     * <code>repeated .ei.DLCItem items = 1;</code>
     * @param value The items to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignItems")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.DLCItem, ItemsProxy>.plusAssign(value: ei.Ei.DLCItem) {
      add(value)
    }/**
     * <code>repeated .ei.DLCItem items = 1;</code>
     * @param values The items to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllItems")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.DLCItem, ItemsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.DLCItem>) {
      _builder.addAllItems(values)
    }/**
     * <code>repeated .ei.DLCItem items = 1;</code>
     * @param values The items to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllItems")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.DLCItem, ItemsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.DLCItem>) {
      addAll(values)
    }/**
     * <code>repeated .ei.DLCItem items = 1;</code>
     * @param index The index to set the value at.
     * @param value The items to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setItems")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.DLCItem, ItemsProxy>.set(index: kotlin.Int, value: ei.Ei.DLCItem) {
      _builder.setItems(index, value)
    }/**
     * <code>repeated .ei.DLCItem items = 1;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearItems")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.DLCItem, ItemsProxy>.clear() {
      _builder.clearItems()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ShellsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.ShellSpec shells = 2;</code>
     */
     public val shells: com.google.protobuf.kotlin.DslList<ei.Ei.ShellSpec, ShellsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getShellsList()
      )
    /**
     * <code>repeated .ei.ShellSpec shells = 2;</code>
     * @param value The shells to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addShells")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSpec, ShellsProxy>.add(value: ei.Ei.ShellSpec) {
      _builder.addShells(value)
    }/**
     * <code>repeated .ei.ShellSpec shells = 2;</code>
     * @param value The shells to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignShells")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSpec, ShellsProxy>.plusAssign(value: ei.Ei.ShellSpec) {
      add(value)
    }/**
     * <code>repeated .ei.ShellSpec shells = 2;</code>
     * @param values The shells to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllShells")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSpec, ShellsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ShellSpec>) {
      _builder.addAllShells(values)
    }/**
     * <code>repeated .ei.ShellSpec shells = 2;</code>
     * @param values The shells to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllShells")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSpec, ShellsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ShellSpec>) {
      addAll(values)
    }/**
     * <code>repeated .ei.ShellSpec shells = 2;</code>
     * @param index The index to set the value at.
     * @param value The shells to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setShells")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSpec, ShellsProxy>.set(index: kotlin.Int, value: ei.Ei.ShellSpec) {
      _builder.setShells(index, value)
    }/**
     * <code>repeated .ei.ShellSpec shells = 2;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearShells")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSpec, ShellsProxy>.clear() {
      _builder.clearShells()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ShellSetsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.ShellSetSpec shell_sets = 3;</code>
     */
     public val shellSets: com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, ShellSetsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getShellSetsList()
      )
    /**
     * <code>repeated .ei.ShellSetSpec shell_sets = 3;</code>
     * @param value The shellSets to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addShellSets")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, ShellSetsProxy>.add(value: ei.Ei.ShellSetSpec) {
      _builder.addShellSets(value)
    }/**
     * <code>repeated .ei.ShellSetSpec shell_sets = 3;</code>
     * @param value The shellSets to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignShellSets")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, ShellSetsProxy>.plusAssign(value: ei.Ei.ShellSetSpec) {
      add(value)
    }/**
     * <code>repeated .ei.ShellSetSpec shell_sets = 3;</code>
     * @param values The shellSets to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllShellSets")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, ShellSetsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ShellSetSpec>) {
      _builder.addAllShellSets(values)
    }/**
     * <code>repeated .ei.ShellSetSpec shell_sets = 3;</code>
     * @param values The shellSets to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllShellSets")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, ShellSetsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ShellSetSpec>) {
      addAll(values)
    }/**
     * <code>repeated .ei.ShellSetSpec shell_sets = 3;</code>
     * @param index The index to set the value at.
     * @param value The shellSets to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setShellSets")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, ShellSetsProxy>.set(index: kotlin.Int, value: ei.Ei.ShellSetSpec) {
      _builder.setShellSets(index, value)
    }/**
     * <code>repeated .ei.ShellSetSpec shell_sets = 3;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearShellSets")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, ShellSetsProxy>.clear() {
      _builder.clearShellSets()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class DecoratorsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.ShellSetSpec decorators = 6;</code>
     */
     public val decorators: com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, DecoratorsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getDecoratorsList()
      )
    /**
     * <code>repeated .ei.ShellSetSpec decorators = 6;</code>
     * @param value The decorators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addDecorators")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, DecoratorsProxy>.add(value: ei.Ei.ShellSetSpec) {
      _builder.addDecorators(value)
    }/**
     * <code>repeated .ei.ShellSetSpec decorators = 6;</code>
     * @param value The decorators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignDecorators")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, DecoratorsProxy>.plusAssign(value: ei.Ei.ShellSetSpec) {
      add(value)
    }/**
     * <code>repeated .ei.ShellSetSpec decorators = 6;</code>
     * @param values The decorators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllDecorators")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, DecoratorsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ShellSetSpec>) {
      _builder.addAllDecorators(values)
    }/**
     * <code>repeated .ei.ShellSetSpec decorators = 6;</code>
     * @param values The decorators to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllDecorators")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, DecoratorsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ShellSetSpec>) {
      addAll(values)
    }/**
     * <code>repeated .ei.ShellSetSpec decorators = 6;</code>
     * @param index The index to set the value at.
     * @param value The decorators to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setDecorators")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, DecoratorsProxy>.set(index: kotlin.Int, value: ei.Ei.ShellSetSpec) {
      _builder.setDecorators(index, value)
    }/**
     * <code>repeated .ei.ShellSetSpec decorators = 6;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearDecorators")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellSetSpec, DecoratorsProxy>.clear() {
      _builder.clearDecorators()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ShellObjectsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.ShellObjectSpec shell_objects = 4;</code>
     */
     public val shellObjects: com.google.protobuf.kotlin.DslList<ei.Ei.ShellObjectSpec, ShellObjectsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getShellObjectsList()
      )
    /**
     * <code>repeated .ei.ShellObjectSpec shell_objects = 4;</code>
     * @param value The shellObjects to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addShellObjects")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellObjectSpec, ShellObjectsProxy>.add(value: ei.Ei.ShellObjectSpec) {
      _builder.addShellObjects(value)
    }/**
     * <code>repeated .ei.ShellObjectSpec shell_objects = 4;</code>
     * @param value The shellObjects to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignShellObjects")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellObjectSpec, ShellObjectsProxy>.plusAssign(value: ei.Ei.ShellObjectSpec) {
      add(value)
    }/**
     * <code>repeated .ei.ShellObjectSpec shell_objects = 4;</code>
     * @param values The shellObjects to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllShellObjects")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellObjectSpec, ShellObjectsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ShellObjectSpec>) {
      _builder.addAllShellObjects(values)
    }/**
     * <code>repeated .ei.ShellObjectSpec shell_objects = 4;</code>
     * @param values The shellObjects to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllShellObjects")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellObjectSpec, ShellObjectsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ShellObjectSpec>) {
      addAll(values)
    }/**
     * <code>repeated .ei.ShellObjectSpec shell_objects = 4;</code>
     * @param index The index to set the value at.
     * @param value The shellObjects to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setShellObjects")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellObjectSpec, ShellObjectsProxy>.set(index: kotlin.Int, value: ei.Ei.ShellObjectSpec) {
      _builder.setShellObjects(index, value)
    }/**
     * <code>repeated .ei.ShellObjectSpec shell_objects = 4;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearShellObjects")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellObjectSpec, ShellObjectsProxy>.clear() {
      _builder.clearShellObjects()
    }
    /**
     * An uninstantiable, behaviorless type to represent the field in
     * generics.
     */
    @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
    public class ShellGroupsProxy private constructor() : com.google.protobuf.kotlin.DslProxy()
    /**
     * <code>repeated .ei.ShellGroupSpec shell_groups = 5;</code>
     */
     public val shellGroups: com.google.protobuf.kotlin.DslList<ei.Ei.ShellGroupSpec, ShellGroupsProxy>
      @kotlin.jvm.JvmSynthetic
      get() = com.google.protobuf.kotlin.DslList(
        _builder.getShellGroupsList()
      )
    /**
     * <code>repeated .ei.ShellGroupSpec shell_groups = 5;</code>
     * @param value The shellGroups to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addShellGroups")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellGroupSpec, ShellGroupsProxy>.add(value: ei.Ei.ShellGroupSpec) {
      _builder.addShellGroups(value)
    }/**
     * <code>repeated .ei.ShellGroupSpec shell_groups = 5;</code>
     * @param value The shellGroups to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignShellGroups")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellGroupSpec, ShellGroupsProxy>.plusAssign(value: ei.Ei.ShellGroupSpec) {
      add(value)
    }/**
     * <code>repeated .ei.ShellGroupSpec shell_groups = 5;</code>
     * @param values The shellGroups to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("addAllShellGroups")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellGroupSpec, ShellGroupsProxy>.addAll(values: kotlin.collections.Iterable<ei.Ei.ShellGroupSpec>) {
      _builder.addAllShellGroups(values)
    }/**
     * <code>repeated .ei.ShellGroupSpec shell_groups = 5;</code>
     * @param values The shellGroups to add.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("plusAssignAllShellGroups")
    @Suppress("NOTHING_TO_INLINE")
    public inline operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellGroupSpec, ShellGroupsProxy>.plusAssign(values: kotlin.collections.Iterable<ei.Ei.ShellGroupSpec>) {
      addAll(values)
    }/**
     * <code>repeated .ei.ShellGroupSpec shell_groups = 5;</code>
     * @param index The index to set the value at.
     * @param value The shellGroups to set.
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("setShellGroups")
    public operator fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellGroupSpec, ShellGroupsProxy>.set(index: kotlin.Int, value: ei.Ei.ShellGroupSpec) {
      _builder.setShellGroups(index, value)
    }/**
     * <code>repeated .ei.ShellGroupSpec shell_groups = 5;</code>
     */
    @kotlin.jvm.JvmSynthetic
    @kotlin.jvm.JvmName("clearShellGroups")
    public fun com.google.protobuf.kotlin.DslList<ei.Ei.ShellGroupSpec, ShellGroupsProxy>.clear() {
      _builder.clearShellGroups()
    }}
}
@kotlin.jvm.JvmSynthetic
public inline fun ei.Ei.DLCCatalog.copy(block: ei.DLCCatalogKt.Dsl.() -> kotlin.Unit): ei.Ei.DLCCatalog =
  ei.DLCCatalogKt.Dsl._create(this.toBuilder()).apply { block() }._build()