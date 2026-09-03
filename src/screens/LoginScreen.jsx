import { useState } from 'react';
import Icon from '../components/Icon';
import { DEMO_CREDENTIALS, AUTH_STORAGE_KEY } from '../data';
import { RED, RED_DIM, TEXT, SUBTEXT, PANEL2, BORDER } from '../theme';

export default function LoginScreen({ go }) {
  const [showPw, setShowPw] = useState(false);
  const [unitId, setUnitId] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    // Biometric-style instant login
    if (unitId === '' && password === '') {
      setError('Please enter your Unit ID and password.');
      return;
    }
    setLoading(true);
    // Simulate an auth round-trip
    setTimeout(() => {
      setLoading(false);
      if (unitId === DEMO_CREDENTIALS.unitId && password === DEMO_CREDENTIALS.password) {
        if (remember) {
          try {
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({ unitId, password }));
          } catch {
            /* storage unavailable – ignore */
          }
        }
        go('dashboard');
      } else {
        setError('Invalid credentials. Try ' + DEMO_CREDENTIALS.unitId + ' / ' + DEMO_CREDENTIALS.password);
      }
    }, 900);
  };

  return (
    <div className="flex flex-col h-full lg:min-h-screen">
          <div className="px-6 pt-4 lg:mx-auto lg:w-full lg:max-w-md lg:px-0 lg:pt-12">
        <div className="flex items-center gap-2 mb-8">
          <Icon name="shieldAlert" size={20} color={RED} />
          <span className="text-[13px] font-bold tracking-wide" style={{ color: SUBTEXT }}>
            SCDF · The Life Saving Force
          </span>
        </div>

        <h1 className="text-[26px] font-bold leading-tight" style={{ color: TEXT }}>Welcome Back,</h1>
        <h1 className="text-[26px] font-bold leading-tight mb-8" style={{ color: TEXT }}>
          Stay Safe, <span style={{ color: RED }}>Save Lives.</span>
        </h1>

        <label className="text-[12px] font-semibold" style={{ color: SUBTEXT }}>Unit ID / NRIC</label>
        <input
          value={unitId}
          onChange={(e) => setUnitId(e.target.value)}
          placeholder="SCDF-001"
          className="w-full mt-1.5 mb-4 px-3.5 py-3 rounded-lg text-sm outline-none"
          style={{
            background: PANEL2,
            border: `1px solid ${error ? RED : BORDER}`,
            color: TEXT,
          }}
        />

        <label className="text-[12px] font-semibold" style={{ color: SUBTEXT }}>Password</label>
        <div
          className="w-full mt-1.5 mb-3 px-3.5 py-3 rounded-lg text-sm flex items-center justify-between"
          style={{
            background: PANEL2,
            border: `1px solid ${error ? RED : BORDER}`,
          }}
        >
          <input
            type={showPw ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            placeholder="password"
            className="bg-transparent outline-none flex-1"
            style={{ color: TEXT }}
          />
          <button onClick={() => setShowPw((v) => !v)}>
            <Icon name={showPw ? 'eyeOff' : 'eye'} size={16} color={SUBTEXT} />
          </button>
        </div>

        {error ? (
          <div className="flex items-center gap-1.5 mb-3 text-[11px] font-medium" style={{ color: RED }}>
            <Icon name="shieldAlert" size={12} color={RED} />
            <span>{error}</span>
          </div>
        ) : null}
        {!error && unitId === '' && (
          <div className="mb-3 text-[10.5px]" style={{ color: SUBTEXT }}>
            Demo login → SCDF-421 / password
          </div>
        )}

        <div className="flex items-center justify-between mb-7 text-[12px]">
          <label className="flex items-center gap-2 cursor-pointer select-none" style={{ color: SUBTEXT }}>
            <input
              type="checkbox"
              className="accent-red-600"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />{' '}
            Remember me
          </label>
          <span style={{ color: SUBTEXT }}>Forgot Password?</span>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3.5 rounded-lg font-bold text-[15px] mb-4 flex items-center justify-center gap-2"
          style={{ background: loading ? RED_DIM : RED, color: '#fff' }}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Verifying…
            </>
          ) : (
            'LOGIN'
          )}
        </button>
        <p className="text-center text-[11px] mt-5" style={{ color: SUBTEXT }}>
          🔒 Secure Access for SCDF Personnel Only
        </p>
      </div>
    </div>
  );
}

