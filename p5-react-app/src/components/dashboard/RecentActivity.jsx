export const RecentActivity = ({ bookings }) => {
  return (
    <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-display font-semibold mb-4">
        Recent Activity
      </h3>
      {bookings.length === 0 ? (
        <p className="text-muted">No recent activity.</p>
      ) : (
        <div className="space-y-3">
          {bookings
            .slice(-5)
            .reverse()
            .map((b) => (
              <div
                key={b.id}
                className="p-3 bg-background border border-border rounded"
              >
                <p className="font-medium">{b.service}</p>
                <p className="text-sm text-muted">{b.time}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
