import Link from 'next/link';
import { SparklesCore } from '@/components/ui/sparkles'; // 我们稍后会创建这个组件

export default function LandingPage() {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black">
            {/* 炫酷的粒子背景 */}
            <div className="pointer-events-none absolute inset-0 h-screen w-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="h-full w-full"
                    particleColor="#FFFFFF"
                />
            </div>

            {/* 左上角的 ID 艺术字 */}
            <div className="absolute top-8 left-8">
                <h1 className="text-4xl font-bold text-white font-mono tracking-widest">
                    N3T-RNNR
                </h1>
            </div>

            {/* 中间的内容 */}
            <div className="relative z-20 flex flex-col items-center">
                <h1 className="relative z-20 text-5xl font-bold text-center text-white md:text-7xl">
                    探索我的数字空间
                </h1>
                <p className="mt-4 text-lg text-center text-neutral-300">
                    代码、思考与创造的交汇点
                </p>

                {/* 进入博客的按钮 */}
                <Link href="/blog">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-10">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              进入博客
            </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}