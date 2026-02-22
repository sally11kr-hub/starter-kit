import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import type { StatCard } from '@/types';

export function StatsCard({ stat }: { stat: StatCard }) {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        {/* 제목 */}
        <div className="flex items-start justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">
            {stat.title}
          </h3>
          {stat.icon && (
            <div className="rounded-lg bg-primary/10 p-2">
              {stat.icon}
            </div>
          )}
        </div>

        {/* 값 */}
        <div className="space-y-2">
          <p className="text-2xl font-bold">{stat.value}</p>
          {stat.description && (
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          )}
        </div>

        {/* 트렌드 */}
        {stat.trend && (
          <div
            className={`flex items-center gap-2 text-xs font-medium ${
              stat.trend.isPositive
                ? 'text-green-600 dark:text-green-400'
                : 'text-red-600 dark:text-red-400'
            }`}
          >
            {stat.trend.isPositive ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            <span>
              {Math.abs(stat.trend.value)}% {stat.trend.isPositive ? '증가' : '감소'}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}
