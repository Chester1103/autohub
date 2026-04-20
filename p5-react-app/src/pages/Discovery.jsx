import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Section from "../components/ui/Section";

export const Discovery = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-12">
      {/* HERO */}
      <div className="max-w-5xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          Welcome to <span className="text-accent">Auto Hub</span>
        </h1>

        <p className="text-muted text-lg mb-10 max-w-2xl mx-auto font-body">
          Your one-stop platform to manage vehicles, schedule services, and keep
          track of maintenance history.
        </p>

        <div className="flex justify-center gap-6">
          <Link to="/login">
            <Button className="px-6 py-3">Login</Button>
          </Link>

          <Link to="/register">
            <Button variant="ghost" className="px-6 py-3">
              Register
            </Button>
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <Section title="Explore Auto Hub Features">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-xl transition border border-border p-6 rounded-xl">
            <h3 className="font-semibold mb-3 font-display text-lg">
              Vehicle Management
            </h3>
            <p className="text-muted text-sm font-body">
              Register and track all your vehicles in one place.
            </p>
          </Card>

          <Card className="hover:shadow-xl transition border border-border p-6 rounded-xl">
            <h3 className="font-semibold mb-3 font-display text-lg">
              Service Booking
            </h3>
            <p className="text-muted text-sm font-body">
              Schedule maintenance with available time slots.
            </p>
          </Card>

          <Card className="hover:shadow-xl transition border border-border p-6 rounded-xl">
            <h3 className="font-semibold mb-3 font-display text-lg">
              Maintenance History
            </h3>
            <p className="text-muted text-sm font-body">
              View your service history and completed work.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">
          Ready to get started?
        </h2>

        <Link to="/register">
          <Button className="px-8 py-3 text-lg">Create Account</Button>
        </Link>
      </div>
    </div>
  );
};
