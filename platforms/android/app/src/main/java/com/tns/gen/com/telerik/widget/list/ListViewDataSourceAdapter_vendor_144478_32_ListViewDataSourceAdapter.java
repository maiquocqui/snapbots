/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.com.telerik.widget.list;

public class ListViewDataSourceAdapter_vendor_144478_32_ListViewDataSourceAdapter
    extends com.telerik.widget.list.ListViewDataSourceAdapter
    implements com.tns.NativeScriptHashCodeProvider {
  public ListViewDataSourceAdapter_vendor_144478_32_ListViewDataSourceAdapter(
      java.util.List param_0) {
    super(param_0);
    com.tns.Runtime.initInstance(this);
  }

  public ListViewDataSourceAdapter_vendor_144478_32_ListViewDataSourceAdapter(
      java.util.List param_0, com.telerik.android.data.RadDataSource param_1) {
    super(param_0, param_1);
    com.tns.Runtime.initInstance(this);
  }

  public ListViewDataSourceAdapter_vendor_144478_32_ListViewDataSourceAdapter(
      com.telerik.android.data.RadDataSource param_0) {
    super(param_0);
    com.tns.Runtime.initInstance(this);
  }

  public boolean isGroupHeader(int param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "isGroupHeader", boolean.class, args);
  }

  public void setItems(java.util.List param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "setItems", void.class, args);
  }

  public boolean canSwipe(int param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "canSwipe", boolean.class, args);
  }

  public boolean canSelect(int param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (boolean) com.tns.Runtime.callJSMethod(this, "canSelect", boolean.class, args);
  }

  public boolean reorderItem(int param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    return (boolean) com.tns.Runtime.callJSMethod(this, "reorderItem", boolean.class, args);
  }

  public int getItemViewType(int param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (int) com.tns.Runtime.callJSMethod(this, "getItemViewType", int.class, args);
  }

  public int getItemViewType(java.lang.Object param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (int) com.tns.Runtime.callJSMethod(this, "getItemViewType", int.class, args);
  }

  public com.telerik.widget.list.ListViewHolder onCreateGroupViewHolder(
      android.view.ViewGroup param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    return (com.telerik.widget.list.ListViewHolder)
        com.tns.Runtime.callJSMethod(
            this, "onCreateGroupViewHolder", com.telerik.widget.list.ListViewHolder.class, args);
  }

  public void onBindGroupViewHolder(
      com.telerik.widget.list.ListViewHolder param_0, java.lang.Object param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onBindGroupViewHolder", void.class, args);
  }

  public com.telerik.widget.list.ListViewHolder onCreateItemViewHolder(
      android.view.ViewGroup param_0, int param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    return (com.telerik.widget.list.ListViewHolder)
        com.tns.Runtime.callJSMethod(
            this, "onCreateItemViewHolder", com.telerik.widget.list.ListViewHolder.class, args);
  }

  public void onBindItemViewHolder(
      com.telerik.widget.list.ListViewHolder param_0, java.lang.Object param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onBindItemViewHolder", void.class, args);
  }

  public void onBindSwipeItemViewHolder(
      com.telerik.widget.list.ListViewHolder param_0, java.lang.Object param_1) {
    java.lang.Object[] args = new java.lang.Object[2];
    args[0] = param_0;
    args[1] = param_1;
    com.tns.Runtime.callJSMethod(this, "onBindSwipeItemViewHolder", void.class, args);
  }

  public com.telerik.widget.list.ListViewHolder onCreateSwipeContentHolder(
      android.view.ViewGroup param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    return (com.telerik.widget.list.ListViewHolder)
        com.tns.Runtime.callJSMethod(
            this, "onCreateSwipeContentHolder", com.telerik.widget.list.ListViewHolder.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}