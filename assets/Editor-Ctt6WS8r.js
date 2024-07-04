import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-DQc-3Bsy.js";import"./BasicForm.vue_vue_type_style_index_0_lang-B437rwsl.js";import"./componentMap-WFKTszB-.js";import{C as d,a as f}from"./entry/index-Ds64Q0jk.js";import{P as _}from"./index-DhZmzChK.js";import{M as a,C as i}from"./index-Byl3IXer.js";import{d as g,Z as C,a8 as b,a9 as n,k as s,u as o,l as p}from"./vue-BjERyvPm.js";import"./FormItem.vue_vue_type_script_lang-t1xZ_ya4.js";import"./helper-CbavOXcu.js";import"./antd-BmrhB3rb.js";import"./index-OUAZ9Zt8.js";import"./useWindowSizeFn-Bsbxm7nG.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-CGeJ9jNn.js";import"./index-CCcaOY-u.js";import"./uuid-D0SLUWHI.js";import"./useSortable-Cgm5h89k.js";import"./download-WH5HnPcd.js";import"./base64Conver-bBv-IO2K.js";import"./index-G5wgvsR3.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-CdEJ9vfm.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-BVvvS_YO.js";import"./index-wrajAHxT.js";import"./useContentViewHeight-BiyaBtY6.js";import"./onMountedOrActivated-DcvTUt7V.js";const A=g({__name:"Editor",setup(h){const m=[{field:"title",component:"Input",label:"title",defaultValue:"标题",rules:[{required:!0}]},{field:"JSON",component:"Input",label:"JSON",defaultValue:`{
        "name":"BeJson",
        "url":"http://www.xxx.com",
        "page":88,
        "isNonProfit":true,"
        address:{ 
            "street":"科技园路.",
            "city":"江苏苏州",
            "country":"中国"
        },
}`,rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>p(i,{value:e[t],mode:a.JSON,onChange:r=>{e[t]=r},config:{tabSize:10}})},{field:"PYTHON",component:"Input",label:"PYTHON",defaultValue:`def functionname( parameters ):
   "函数_文档字符串"
   function_suite
   return [expression]`,rules:[{required:!0,trigger:"blur"}],render:({model:e,field:t})=>p(i,{value:e[t],mode:a.PYTHON,onChange:r=>{e[t]=r}})}],{createMessage:u}=f();function l(e){u.success("click search,values:"+JSON.stringify(e))}return(e,t)=>(C(),b(o(_),{title:"代码编辑器组件嵌入Form示例"},{default:n(()=>[s(o(d),{title:"代码编辑器组件"},{default:n(()=>[s(o(c),{labelWidth:100,schemas:m,actionColOptions:{span:24},baseColProps:{span:24},onSubmit:l})]),_:1})]),_:1}))}});export{A as default};
