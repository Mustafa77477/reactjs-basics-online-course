import { ChangeEvent, useState } from "react"; // استيراد useState و ChangeEvent من React
import "./LoginForm.scss"; // استيراد التنسيقات
import { IuserData } from "../../interfaces"; // استيراد الواجهة الخاصة ببيانات المستخدم
import { formInputList } from "../../data"; // استيراد قائمة المدخلات

// تعريف الـ props التي يتم تمريرها إلى المكوّن
interface IProps {
  setIsLoggedIn: (val: boolean) => void; // لتغيير حالة تسجيل الدخول
  userData: IuserData; // بيانات المستخدم
  setUserData: (user: IuserData) => void; // لتحديث بيانات المستخدم
}

// ** بداية المكوّن الرئيسي
const LoginForm = ({ setIsLoggedIn, userData, setUserData }: IProps) => {
  const [inputArr, setInputArr] = useState(formInputList); 
  // استخدام useState لتخزين قائمة المدخلات.
  // ❌ الخطأ السابق: التسمية كانت setinputArr (بـ i صغيرة) بدلًا من setInputArr. 
  // ✅ التصحيح: اتبعت التنسيق القياسي camelCase.

  // ** Handlers
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target; // استخراج الاسم والقيمة من المدخل
    setUserData({
      ...userData, // نسخ بيانات المستخدم الحالية
      [name]: value, // تحديث الحقل المطابق لاسم المدخل
    });
  };

  // دالة لحذف مدخل بناءً على اسمه
  const removeInput = (name: string) => {
    const filtered = inputArr.filter(input => input.name !== name); 
    // ❌ الخطأ السابق: كان يتم استخدام formInputList[idx]["name"]، مما قد يؤدي لأخطاء في حالة إعادة ترتيب المدخلات.
    // ✅ التصحيح: استخدمت اسم المدخل مباشرة من input.name للتصفية بشكل آمن.

    setInputArr(filtered); // تحديث قائمة المدخلات بعد التصفية
    console.log(`Removed input with name: ${name}`); 
    // ❌ الخطأ السابق: console.log(`rrmove$[idx]`) كانت تحتوي على خطأ إملائي.
    // ✅ التصحيح: وضعت رسالة واضحة توضح المدخل المحذوف.
  };

  // ** Renders
  const renderFormInputList = inputArr.map((input) => (
    <div style={{ display: "flex", alignItems: "center" }} key={input.id}>
      {/* ❌ الخطأ السابق: كان يتم استخدام idx كـ key، مما قد يسبب مشاكل عند إعادة الترتيب.
          ✅ التصحيح: استخدمت input.id كـ key لأنه معرّف فريد لكل مدخل. */}
      
      <div className="input-wrapper">
        <label htmlFor={input.id}>{input.label}:</label> 
        {/* ✅ تعديل: استخدمت input.label بدلًا من كتابة النص يدويًا (مثل "Username") لتكون الديناميكية أفضل. */}
        
        <input
          type={input.type} // تحديد نوع المدخل
          name={input.name} // اسم المدخل
          id={input.id} // معرّف فريد
          value={userData[input.name] || ""} 
          // ❌ الخطأ السابق: إذا لم تكن القيمة موجودة في userData، كان الكود قد يسبب خطأ.
          // ✅ التصحيح: وضعت || "" لتفادي الخطأ في حالة عدم وجود قيمة.
          onChange={onChangeHandler} // تعيين الـ handler لتغيير البيانات
        />
      </div>
      <button onClick={() => removeInput(input.name)}>❌</button> 
      {/* تمرير اسم المدخل إلى دالة الحذف */}
    </div>
  ));

  return (
    <div>
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال
        }}
      >
        {renderFormInputList} {/* عرض المدخلات */}
        <button type="button" onClick={() => setIsLoggedIn(true)}>
          LOGIN
        </button>
        {/* ❌ الخطأ السابق: لم يتم تحديد type="button"، مما قد يؤدي إلى إرسال النموذج عن طريق الخطأ.
            ✅ التصحيح: ضبط النوع على "button" لمنع إرسال النموذج. */}
      </form>
    </div>
  );
};

export default LoginForm; // تصدير المكون
