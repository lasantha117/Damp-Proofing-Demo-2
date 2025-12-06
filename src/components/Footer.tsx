import { Shield, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="text-white">DampGuard Pro</div>
                <div className="text-xs text-green-500">Premium Protection</div>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Leading damp proofing specialists providing lifetime protection for your property.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-green-500 transition-colors text-slate-400 hover:text-slate-950">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-green-500 transition-colors text-slate-400 hover:text-slate-950">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-green-500 transition-colors text-slate-400 hover:text-slate-950">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-green-500 transition-colors text-slate-400 hover:text-slate-950">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#services" className="hover:text-green-500 transition-colors">Damp Proof Course</a></li>
              <li><a href="#services" className="hover:text-green-500 transition-colors">Basement Waterproofing</a></li>
              <li><a href="#services" className="hover:text-green-500 transition-colors">Condensation Control</a></li>
              <li><a href="#services" className="hover:text-green-500 transition-colors">Timber Treatment</a></li>
              <li><a href="#services" className="hover:text-green-500 transition-colors">Property Surveys</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-green-500 transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-green-500 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>0800 123 4567</li>
              <li>info@dampguardpro.co.uk</li>
              <li>123 Professional Way</li>
              <li>London, UK</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
              © 2025 DampGuard Pro. All rights reserved. 
              <span className="mx-2"> </span>
               Developed by{' '}
              <a
                href="https://lasantha.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline"
              >
                Lasantha Pradeep
              </a>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
