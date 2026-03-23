from PIL import Image, ImageChops
import sys
import os

def auto_crop_bright(input_path, output_path):
    try:
        with Image.open(input_path) as img:
            # Convert to grayscale to find edges
            gray = img.convert('L')
            # Threshold to find bright areas (certificate is usually white/light)
            # We want to find the central large rectangle
            # However, simpler: crop the UI bars
            w, h = img.size
            # GDrive standard UI:
            # Top bar ~100px
            # Sidebar thumbnails ~240px if visible
            # Let's try to trim the dark margins
            
            # Simple fixed crop for GDrive 1920x970:
            # Left edge of cert is at ~240 if thumbnails open, else ~40
            # Top edge is at ~105
            
            # I'll try to detect the "white" bounding box
            # cert_hackathon_clean has thumbnails open
            if "hackathon" in input_path:
                left = 245
                top = 105
                right = w - 5
                bottom = h - 15
            else:
                # CSE also has thumbnails
                left = 245
                top = 105
                right = w - 5
                bottom = h - 15
            
            cropped = img.crop((left, top, right, bottom))
            cropped.save(output_path)
            print(f"Cropped {input_path} to {output_path}: {cropped.size}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    auto_crop_bright(sys.argv[1], "e:\\Sai-Portfolio\\public\\assets\\certs\\cert_cse.png")
    auto_crop_bright(sys.argv[2], "e:\\Sai-Portfolio\\public\\assets\\certs\\cert_hackathon.png")
