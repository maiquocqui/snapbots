/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.java.lang;

public class Object_vendor_145064_36_ListViewItemReorderListenerImpl extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        com.telerik.widget.list.ItemReorderBehavior.ItemReorderListener {
  public Object_vendor_145064_36_ListViewItemReorderListenerImpl() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onReorderStarted(int param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onReorderStarted", void.class, args);
  }

  public void onReorderItem(int param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onReorderItem", void.class, args);
  }

  public void onReorderFinished() {
    java.lang.Object[] args = new java.lang.Object[0];
    com.tns.Runtime.callJSMethod(this, "onReorderFinished", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
