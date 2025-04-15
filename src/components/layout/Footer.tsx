import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { LogoWithText } from "@/components/common/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-secondary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <LogoWithText height={40} />
            <p className="text-muted-foreground max-w-sm">
              A minimal, beautiful project tracker for solo developers and indie hackers.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TaskaNova. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
