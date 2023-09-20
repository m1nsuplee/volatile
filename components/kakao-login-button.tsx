'use client';

import KakaoSymbol from '@/assets/kakao-symbol.svg';
import { Database } from '@/types/db';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export function KakaoLoginButton() {
  const authService = createClientComponentClient<Database>({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  }).auth;

  const handleKakaoLoginButtonClick = async () => {
    try {
      await authService.signInWithOAuth({
        provider: 'kakao',
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error('로그인 실패');
      }
    }
  };

  return (
    <button
      id="kakao-login-button"
      type="button"
      className="w-52 h-10 bg-[#FEE500] rounded text-[#191919] flex justify-center items-center tracking-tighter gap-x-2"
      onClick={handleKakaoLoginButtonClick}
    >
      <KakaoSymbol />
      <span>카카오로 시작하기</span>
    </button>
  );
}
