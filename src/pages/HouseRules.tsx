import { Clock, Volume2, Cigarette, Dog, Shield, Key, UtensilsCrossed, AlertCircle } from 'lucide-react';

export default function HouseRules() {
  const rules = [
    {
      icon: Clock,
      title: 'Check-in / Check-out',
      items: [
        'Check-in time: 12:00 PM onwards',
        'Check-out time: 11:00 AM',
        'Early check-in subject to availability',
        'Late check-out may incur additional charges',
      ],
    },
    {
      icon: Volume2,
      title: 'Quiet Hours',
      items: [
        'Quiet hours: 10:00 PM - 7:00 AM',
        'Please be considerate of other guests',
        'Keep music and TV volume low',
        'No loud gatherings in rooms',
      ],
    },
    {
      icon: Cigarette,
      title: 'Smoking Policy',
      items: [
        'Smoking is strictly prohibited inside rooms',
        'Designated smoking area available outside',
        'Please dispose of cigarette butts properly',
        'Violation may result in cleaning charges',
      ],
    },
    {
      icon: Dog,
      title: 'Pets',
      items: [
        'Pets are not allowed in the guest house',
        'Service animals are welcome with prior notice',
        'Please inform us in advance',
      ],
    },
    {
      icon: Key,
      title: 'Security & Safety',
      items: [
        'Keep your room locked at all times',
        'Do not leave valuables unattended',
        'Lost keys will incur replacement charges',
        'Report any suspicious activity to staff',
      ],
    },
    {
      icon: UtensilsCrossed,
      title: 'Food & Dining',
      items: [
        'Breakfast served from 7:00 AM - 10:00 AM',
        'Outside food allowed in rooms',
        'No cooking in rooms',
        'Home-cooked meals available on request',
      ],
    },
    {
      icon: Shield,
      title: 'Guest Responsibilities',
      items: [
        'Guests are responsible for any damage',
        'Please treat the property with respect',
        'Keep common areas clean',
        'Follow all posted safety guidelines',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Important Notes',
      items: [
        'Valid ID required at check-in',
        'Payment accepted in cash or online transfer',
        'Guest registration is mandatory',
        'Management reserves the right to refuse service',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">House Rules</h1>
          <p className="text-xl text-amber-100">Guidelines for a pleasant stay</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            We want all our guests to have a comfortable and enjoyable stay. Please take a moment to review our house rules.
            These guidelines help us maintain a peaceful environment for everyone. If you have any questions or special
            requirements, please don't hesitate to contact us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {rules.map((rule) => (
            <div key={rule.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <rule.icon className="h-8 w-8 text-amber-700" />
                <h2 className="text-2xl font-bold text-amber-900">{rule.title}</h2>
              </div>
              <ul className="space-y-2">
                {rule.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-amber-700 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Thank You for Your Cooperation</h3>
          <p className="text-lg text-green-100">
            We appreciate your understanding and cooperation in following these guidelines.
            Our goal is to ensure everyone has a safe, comfortable, and memorable stay.
            If you have any concerns or need assistance, please contact our staff at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
