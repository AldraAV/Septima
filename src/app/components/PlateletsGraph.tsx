import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, CartesianGrid } from 'recharts';

interface PlateletsGraphProps {
    data: any;
    loading: boolean;
}

const PlateletsGraph: React.FC<PlateletsGraphProps> = ({ data, loading }) => {
    if (loading) {
        return (
            <div className="w-full h-80 flex items-center justify-center bg-white/5 rounded-2xl animate-pulse">
                <span className="text-aurora-muted">Consultando EquaCore C++...</span>
            </div>
        );
    }

    if (!data || !data.t) return null;

    const chartData = data.t.map((time: number, index: number) => ({
        day: Math.floor(time),
        platelets: data.y[index][0],
        antibodies: data.y[index][1] * 10000 
    }));

    return (
        <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorPlat" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00EAD3" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#00EAD3" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="day" stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} tickMargin={10} />
                    <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} domain={[0, 'auto']} tickFormatter={(v) => `${(v/1000).toFixed(0)}k`} />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: 'rgba(6, 11, 22, 0.95)', 
                            border: '1px solid rgba(0, 234, 211, 0.2)', 
                            borderRadius: '12px', 
                            color: '#F9FAFB',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(8px)'
                        }}
                        itemStyle={{ color: '#00EAD3', fontWeight: 'bold' }}
                        labelStyle={{ color: '#94A3B8', marginBottom: '4px' }}
                    />
                    <ReferenceLine y={30000} stroke="#FF2E63" strokeOpacity={0.6} strokeDasharray="3 4" label={{ value: 'Alerta Severa', fill: '#FF2E63', fontSize: 10, position: 'insideTopLeft' }} />
                    <ReferenceLine y={150000} stroke="#34d399" strokeOpacity={0.6} strokeDasharray="3 4" label={{ value: 'Nivel Óptimo', fill: '#34d399', fontSize: 10, position: 'insideBottomLeft' }} />
                    <Area type="monotone" dataKey="platelets" stroke="#00EAD3" strokeWidth={3} fillOpacity={1} fill="url(#colorPlat)" animationDuration={1800} activeDot={{ r: 6, fill: '#00EAD3', stroke: '#fff', strokeWidth: 2 }}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PlateletsGraph;
