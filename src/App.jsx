import { useState } from "react"; 
// useState — React ichida ma'lumotni saqlash va o‘zgartirish uchun ishlatiladi

export default function HabitTracker() { 
  // Bu bizning asosiy komponent (asosiy funksiya)

  const [habits, setHabits] = useState([]);
  // habits — odatlar ro‘yxati (massiv)
  // setHabits — uni yangilash funksiyasi

  const [input, setInput] = useState("");
  // input — inputga yozilgan matnni saqlaydi
  // setInput — input qiymatini o‘zgartirish uchun


  // Yangi odat qo‘shish funksiyasi
  const addHabit = () => {
    if (!input.trim()) return; 
    // agar input bo‘sh bo‘lsa — hech nima qilmaydi

    setHabits([...habits, { name: input, count: 0 }]);
    // eski odatlarga yangi odat qo‘shyapmiz
    // name: odat nomi
    // count: necha marta bajarilgan (boshlang‘ich 0)

    setInput(""); 
    // inputni bo‘shartirib qo‘yadi
  };


  // "Bajardim" tugmasi bosilganda ishlaydi
  const done = (i) => {
    const list = [...habits];
    // habits ni nusxa qilib olyapmiz (Reactda shu muhim)

    list[i].count++; 
    // shu odatning count qiymatini +1 qilamiz

    setHabits(list);
    // yangilangan ro‘yxatni qayta saqlaymiz
  };


  // Ekranga chizilish qismi (UI)
  return (
    <div className="p-5 min-h-screen flex justify-center items-center flex-col text-center">
      {/* Asosiy konteyner — markazda joylashgan */}
      
      <h1 className="text-2xl font-bold mb-3">Odat Kuzatuvchi</h1>
      {/* Sarlavha */}

      <input
        className="border p-2 mr-2"
        placeholder="Odat kiriting..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {/* Input — bu yerga odat nomi yoziladi */}

      <button onClick={addHabit} className="bg-blue-500 text-white px-3 py-2">
        Qo'shish
      </button>
      {/* Qo‘shish tugmasi — addHabit funksiyasini chaqiradi */}

      <ul className="mt-4">
        {habits.map((h, i) => (
          <li key={i} className="flex gap-3 items-center mb-2">
            {/* Har bir odatni chiqaramiz */}
            
            <span>{h.name}</span>
            {/* Odat nomi */}

            <span>- {h.count} marta bajarildi</span>
            {/* Necha marta bajarilgani */}

            <button
              onClick={() => done(i)} 
              className="bg-green-500 text-white px-2 py-1"
            >
              Bajardim
            </button>
            {/* "Bajardim" bosilsa — count ++ bo‘ladi */}
          </li>
        ))}
      </ul>
    </div>
  );
}
