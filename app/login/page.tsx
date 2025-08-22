'use client';
import { useState } from 'react';
import { useAuth } from '@/components/providers/auth-provider';

export default function LoginPage() {
  const { login, signup, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login'|'signup'>('login');
  const [message, setMessage] = useState<string>('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (mode === 'login') await login(email, password);
      else await signup(email, password);
      setMessage('Success!');
    } catch (e:any) {
      setMessage(e.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-semibold">{mode === 'login' ? 'Log in' : 'Sign up'}</h1>
        <input className="w-full border rounded p-2" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border rounded p-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button disabled={isLoading} className="w-full rounded p-2 border">{mode === 'login' ? 'Log in' : 'Create account'}</button>
        <button type="button" className="w-full underline" onClick={()=>setMode(mode==='login'?'signup':'login')}>
          {mode==='login' ? 'Need an account? Sign up' : 'Have an account? Log in'}
        </button>
        {message && <p className="text-sm">{message}</p>}
      </form>
    </div>
  );
}
