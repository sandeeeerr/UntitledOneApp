"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import * as React from "react";
import { FC } from "react";
import { toast, useToast } from "@/hooks/use-toast";

import { Button } from "../elements/Button";
import { Icons } from "../elements/Icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isLoadingGoogle, setIsLoadingGoogle] = React.useState<boolean>(false);
  const [isLoadingSpotify, setIsLoadingSpotify] = React.useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoadingGoogle(true);

    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoadingGoogle(false);
    }
  };

  const loginWithSpotify = async () => {
    setIsLoadingSpotify(true);

    try {
      await signIn("spotify");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Spotify",
        variant: "destructive",
      });
    } finally {
      setIsLoadingSpotify(false);
    }
  };

  return (
    <div className={cn("", className)} {...props}>
      <Button
        isLoading={isLoadingGoogle}
        type="button"
        variant="secondary"
        size="sm"
        className="w-full mb-2"
        onClick={loginWithGoogle}
        disabled={isLoadingGoogle}
      >
        {isLoadingGoogle ? null : <Icons.google className="w-4 h-4 mr-2" />}
        Google
      </Button>

      <Button
        isLoading={isLoadingSpotify}
        type="button"
        variant="secondary"
        size="sm"
        className="w-full"
        onClick={loginWithSpotify}
        disabled={isLoadingSpotify}
      >
        {isLoadingSpotify ? null : <Icons.spotify className="w-4 h-4 mr-2" />}
        Spotify
      </Button>
    </div>
  );
};

export default UserAuthForm;
