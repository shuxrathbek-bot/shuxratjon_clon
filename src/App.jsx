import { useState } from "react"; 

export default function HabitTracker() { 
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");

  const addHabit = () => {
    if (!input.trim()) return; 
    setHabits([...habits, { name: input, count: 0 }]);
    setInput(""); 
  };

  const done = (i) => {
    const list = [...habits];
    list[i].count++; 
    setHabits(list);
  };

  const removeHabit = (i) => {
    const list = habits.filter((_, index) => index !== i);
    setHabits(list);
  };

  return (
    <>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .gradient-bg {
          background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #4facfe);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .habit-card {
          animation: fadeIn 0.5s ease;
          transition: all 0.3s ease;
        }

        .habit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.5);
        }

        .btn-success {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          transition: all 0.3s ease;
        }

        .btn-success:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(56, 239, 125, 0.5);
        }

        .btn-danger {
          background: linear-gradient(135deg, #ee0979 0%, #ff6a00 100%);
          transition: all 0.3s ease;
        }

        .btn-danger:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(238, 9, 121, 0.5);
        }

        .input-glow {
          transition: all 0.3s ease;
        }

        .input-glow:focus {
          outline: none;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.6);
          border-color: #667eea;
        }

        .title-shimmer {
          background: linear-gradient(90deg, #fff 0%, #f0f0f0 50%, #fff 100%);
          background-size: 1000px 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s infinite;
        }

        .count-badge {
          animation: pulse 2s infinite;
        }
      `}</style>

      <div className="gradient-bg" style={{ minHeight: '100vh', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        <div className="glass-effect" style={{ maxWidth: '600px', width: '100%', borderRadius: '24px', padding: '40px', marginBottom: '30px' }}>
          <h1 className="title-shimmer" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '30px', textAlign: 'center' }}>
            🎯 Odat Kuzatuvchi
          </h1>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '30px' }}>
            <input
              className="input-glow"
              style={{
                flex: 1,
                padding: '16px 20px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.9)',
                fontSize: '16px',
                fontWeight: '500'
              }}
              placeholder="Yangi odat kiriting..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addHabit()}
            />

            <button 
              onClick={addHabit} 
              className="btn-primary"
              style={{
                padding: '16px 32px',
                borderRadius: '12px',
                border: 'none',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              ➕ Qo'shish
            </button>
          </div>

          {habits.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px', color: 'rgba(255, 255, 255, 0.8)' }}>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>📝</div>
              <p style={{ fontSize: '18px', fontWeight: '500' }}>Hali odatlar yo'q. Birinchisini qo'shing!</p>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {habits.map((h, i) => (
              <div 
                key={i} 
                className="habit-card"
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                    {h.name}
                  </span>
                  <span 
                    className="count-badge"
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }}
                  >
                    ✨ {h.count} marta
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => done(i)}
                    className="btn-success"
                    style={{
                      flex: 1,
                      padding: '12px',
                      borderRadius: '10px',
                      border: 'none',
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    ✅ Bajardim
                  </button>

                  <button
                    onClick={() => removeHabit(i)}
                    className="btn-danger"
                    style={{
                      padding: '12px 20px',
                      borderRadius: '10px',
                      border: 'none',
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', color: 'rgba(255, 255, 255, 0.9)' }}>
          <p style={{ fontSize: '16px', fontWeight: '500' }}>
            💪 Har kuni yangi odat quring va o'zingizni rivojlantiring!
          </p>
        </div>
      </div>
    </>
  );
}