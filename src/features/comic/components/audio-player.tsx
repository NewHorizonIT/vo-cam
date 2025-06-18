"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import type { AudioState } from "../type";

interface AudioPlayerProps {
  audioUrl?: string;
  currentTime?: number;
  onTimeUpdate?: (currentTime: number) => void;
  onEnded?: () => void;
  autoPlay?: boolean;
  className?: string;
  onSeek?: (time: number) => void;
  onPlayStateChange?: (isPlaying: boolean) => void; // Thêm prop này
}

export function AudioPlayer({
  audioUrl,
  currentTime = 0,
  onTimeUpdate,
  onEnded,
  autoPlay = false,
  className,
  onSeek,
  onPlayStateChange, // Thêm prop này
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    isLoading: false,
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && Math.abs(audio.currentTime - currentTime) > 1) {
      audio.currentTime = currentTime;
    }
  }, [currentTime]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !audioUrl) return;

    setAudioState((prev) => ({ ...prev, isLoading: true }));

    const handleLoadedMetadata = () => {
      setAudioState((prev) => ({
        ...prev,
        duration: audio.duration,
        isLoading: false,
      }));

      if (autoPlay) {
        audio.play();
        setAudioState((prev) => ({ ...prev, isPlaying: true }));
      }
    };

    const handleTimeUpdate = () => {
      setAudioState((prev) => ({
        ...prev,
        currentTime: audio.currentTime,
      }));
      onTimeUpdate?.(audio.currentTime);
    };

    const handleEnded = () => {
      setAudioState((prev) => ({
        ...prev,
        isPlaying: false,
        currentTime: 0,
      }));
      onEnded?.();
    };

    const handlePlay = () => {
      setAudioState((prev) => ({ ...prev, isPlaying: true, isLoading: false }));
      onPlayStateChange?.(true);
    };

    const handlePause = () => {
      setAudioState((prev) => ({ ...prev, isPlaying: false }));
      onPlayStateChange?.(false);
    };

    if (audio.readyState >= 1) {
      handleLoadedMetadata();
    }

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audioUrl, autoPlay, onEnded, onTimeUpdate, onPlayStateChange]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
    } else {
      audio.play().catch((err) => {
        console.error("Play error:", err);
      });
    }
  };

  const handleSeek = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = value[0];
    audio.currentTime = newTime;
    setAudioState((prev) => ({ ...prev, currentTime: newTime }));
    onSeek?.(newTime);
  };

  const handleVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = value[0];
    audio.volume = newVolume;
    setAudioState((prev) => ({ ...prev, volume: newVolume }));
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!audioUrl) return null;

  return (
    <Card className={className}>
      <CardContent className="p-4">
        <audio ref={audioRef} src={audioUrl} preload="metadata" />

        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <Slider
              value={[audioState.currentTime]}
              max={audioState.duration || 100}
              step={1}
              onValueChange={handleSeek}
              className="w-full"
              disabled={audioState.isLoading}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(audioState.currentTime)}</span>
              <span>{formatTime(audioState.duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-2">
            <Button variant="default" size="sm" onClick={togglePlayPause}>
              {audioState.isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : audioState.isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                handleVolumeChange([audioState.volume > 0 ? 0 : 1])
              }
            >
              {audioState.volume > 0 ? (
                <Volume2 className="w-4 h-4" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </Button>
            <Slider
              value={[audioState.volume]}
              max={1}
              step={0.1}
              onValueChange={handleVolumeChange}
              className="flex-1"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
