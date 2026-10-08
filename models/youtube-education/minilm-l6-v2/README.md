# Neon Focus local text model

Source: [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2), Apache-2.0. Pinned upstream revision: `1110a243fdf4706b3f48f1d95db1a4f5529b4d41`.

`model.onnx` is the upstream `onnx/model_qint8_arm64.onnx` export, dynamic signed INT8 weights, not a trained education classifier. It produces token embeddings; the app applies attention-aware mean pooling and normalization, then compares educational and entertainment prototypes. Similarity is not a probability or proof of video content. The model is English-focused; multilingual accuracy is not established.

Runtime downloads ONLY `model.onnx` and `vocab.txt` from the manifest: 23,257,561 bytes total. The tokenizer/config files are reference provenance, not extra app downloads. No GitHub credentials are needed: this repository is public. Model weights are not bundled in the APK.

Manifest and assets use HTTPS with size and SHA-256 verification. Version 1 trusts this repository's HTTPS delivery; no signed-manifest claim is made. Do not overwrite versioned assets during active rollout. Future publication must preserve the old release until compatibility and inference checks pass.

Checksums, model loading and finite tensor checks verify integrity, not educational classification quality. Do not claim universal YouTube-layout compatibility, zero false blocks, or protection based on the entire video: classification uses available text.
