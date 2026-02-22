import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { ActivityItem } from '@/types';

const statusConfig = {
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
};

export function RecentActivity({ activities }: { activities: ActivityItem[] }) {
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-6">최근 활동</h3>

      <div className="space-y-4">
        {activities.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            최근 활동이 없습니다.
          </p>
        ) : (
          activities.map((activity, index) => (
            <div key={activity.id}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  {activity.icon && (
                    <div className="mt-1 rounded-lg bg-primary/10 p-2 text-primary">
                      {activity.icon}
                    </div>
                  )}
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    {activity.description && (
                      <p className="text-xs text-muted-foreground">
                        {activity.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  {activity.status && (
                    <Badge
                      variant="secondary"
                      className={statusConfig[activity.status]}
                    >
                      {activity.status === 'success'
                        ? '성공'
                        : activity.status === 'pending'
                          ? '대기 중'
                          : '오류'}
                    </Badge>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {activity.timestamp.toLocaleDateString('ko-KR')}
                  </p>
                </div>
              </div>

              {index < activities.length - 1 && <Separator className="mt-4" />}
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
