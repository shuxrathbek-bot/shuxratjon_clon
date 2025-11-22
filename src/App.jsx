import { useState } from "react"; 
// useState — React ichida ma'lumotni saqlash va o‘zgartirish uchun

export default function HabitTracker() { 
  // Bu bizning asosiy funksiya — komponent

  const [habits, setHabits] = useState([]);
  // habits — odatlar ro‘yxati (massiv)
  // setHabits — massivni yangilovchi funksiya

  const [input, setInput] = useState("");
  // input — inputga yozilgan matn
  // setInput — inputni yangilash funksiyasi

  // ⬇️ Yangi odat qo‘shish funksiyasi
  const addHabit = () => {
    if (!input.trim()) return; 
    // agar input bo‘sh bo‘lsa — hech narsa qilmaydi

    setHabits([...habits, { name: input, count: 0 }]);
    // massivga yangi obyekt qo‘shayapmiz
    // name: inputdan kelgan matn
    // count: boshlang'ich qiymati — 0

    setInput(""); 
    // inputni tozalaydi
  };

  // ⬇️ "Bajardim" tugmasi funksiyasi
  const done = (i) => {
    const list = [...habits];
    // massivni nusxa qilib olyapmiz (Reactda majburiy)

    list[i].count++; 
    // i-indexdagi elementning count qiymatini bittaga oshiramiz

    setHabits(list);
    // yangilangan massivni saqlaymiz
  };

  // ⬇️ O'chirish tugmasi funksiyasi
  const removeHabit = (i) => {
    const list = habits.filter((_, index) => index !== i);
    // filter → i bo‘lmagan elementlarni qoldiradi
    setHabits(list);
    // yangilangan massivni qayta yuklaydi
  };

  return (
    <div className="p-5 min-h-screen flex justify-center items-center flex-col text-center">
      {/* Asosiy konteyner — hamma narsa markazda */}

      <h1 className="text-2xl font-bold mb-3">Habit Tracker</h1>

      <input
        className="border p-2 mr-2"
        placeholder="Odat kiriting..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addHabit} className="bg-blue-500 text-white px-3 py-2">
        Qo'shish
      </button>

      <ul className="mt-4">
        {habits.map((h, i) => (
          <li key={i} className="flex flex-col md:flex-row gap-2 md:gap-3 items-center mb-4 bg-white p-3 rounded shadow w-full max-w-sm mx-auto">
            {/* Har bir odat kartochka ko‘rinishida */}

            <span className="font-semibold">{h.name}</span>

            <span className="text-gray-600">{h.count} marta bajarildi</span>

            <div className="flex gap-2">
              <button
                onClick={() => removeHabit(i)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                O'chirish
              </button>
              <button 
                onClick={() => done(i)}
                className="bg-green-600 text-white px-3 py-1 rounded"
                id="joy"
              >
                Bajardim
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
