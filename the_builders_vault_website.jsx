import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* HERO */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Builder’s Vault
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Inside the Vault: Systems Built to Generate.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Enter the Vault</Button>
          <Button variant="outline">View Builds</Button>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* LeadGhost */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">LeadGhost</h2>
            <p className="text-sm text-gray-400 mb-3">
              Automated lead generation engine built to capture and convert while you sleep.
            </p>
            <p className="text-xs text-green-400 mb-4">Status: Active Build</p>
            <div className="flex gap-2">
              <Button size="sm">View Build</Button>
              <Button size="sm" variant="outline">Demo</Button>
            </div>
          </CardContent>
        </Card>

        {/* FootFlirt */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">FootFlirt</h2>
            <p className="text-sm text-gray-400 mb-3">
              A bold creator app where users post, get rated, tipped, and build loyal fanbases through interactive engagement.
            </p>
            <p className="text-xs text-green-400 mb-4">Status: LIVE</p>
            <div className="flex gap-2">
              <Button size="sm">Download</Button>
              <Button size="sm" variant="outline">Details</Button>
            </div>
          </CardContent>
        </Card>

        {/* TrashPanda Kombat */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">TrashPanda Kombat</h2>
            <p className="text-sm text-gray-400 mb-3">
              Raccoon fighting game with upgradeable characters and Web3-inspired mechanics.
            </p>
            <p className="text-xs text-yellow-400 mb-4">Status: In Development</p>
            <div className="flex gap-2">
              <Button size="sm" disabled>Coming Soon</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FOOTER */}
      <div className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} The Builder’s Vault
      </div>
    </div>
  );
}