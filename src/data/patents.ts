export interface PatentSpecification {
  id: string
  code: string
  title: string
  jurisdiction: string
  statutoryBasis: string
  ipcCodes: string[]
  shortDescription: string
  problemSolved: string
  technicalEffect: string
  claimsSummary: string[]
  abstract: string
  localPath: string
}

export const patents: PatentSpecification[] = [
  {
    id: 'in-pat-01',
    code: 'IN-PAT-2026-01',
    title: 'A System and Method for Bi-Temporal Event-Sourced Dental State Projection and Tamper-Evident Merkle Chain Ledger for Operatory Records',
    jurisdiction: 'Indian Patent Office (IPO) / CGPDTM',
    statutoryBasis: 'Form 2 (Second Schedule) Complete Specification · Patents Act 1970 § 10 & Rule 13 · CRI Guidelines 2017',
    ipcCodes: ['G16H 10/60', 'G06F 21/64', 'A61C 19/00'],
    shortDescription: 'Bi-temporal event sourcing (Valid Time vs. Transaction Time) combined with SHA-256 Merkle hash chain for non-repudiable medical-legal odontograms and ABDM FHIR R5 compliance.',
    problemSolved: 'Conventional dental Practice Management Systems (PMS) perform destructive database UPDATEs, obliterating historical tooth condition states and leaving records vulnerable to internal log tampering during malpractice disputes or insurance audits.',
    technicalEffect: 'Deterministic historical time-travel projection of 32-tooth FDI/Universal odontograms at any arbitrary past millisecond coordinate without database rollbacks, verified via unbroken cryptographic Merkle digests anchored to a Genesis hash.',
    claimsSummary: [
      'Append-only cryptographic event store recording dual-time tuples (T_valid, T_transaction) alongside aggregate versioning.',
      'SHA-256 Merkle chain linking every clinical event digest to its predecessor, anchored to GENESIS_HASH_DCOS_V2_GENESIS_2026.',
      'Deterministic projection engine replaying in-memory state deltas to reconstruct 32-tooth odontogram matrices without database rollbacks.',
      '6-point periodontal probing depth matrix encapsulation (MB, B, DB, ML, L, DL) with automated anomaly trapping.',
      'Sovereign HL7 FHIR R5 serialization encrypted via Fidelius ECDH Curve25519 + AES-GCM-256 for ABDM Milestone 3 health exchange.',
    ],
    abstract: 'A system and method for maintaining an immutable, tamper-evident bi-temporal event-sourced dental operatory record. Clinical observations including 32-tooth odontogram diagnostics, surface restorations, and 6-point periodontal probing arrays are committed as monotonically incremented domain events. Each event incorporates a valid time, transaction time, and a SHA-256 Merkle chain hash linking to the preceding event. A bi-temporal projection engine reconstructs historical dental states at any past point in time without database rollbacks, providing non-repudiation for medico-legal audits and encrypted ABDM FHIR R5 health data exchange.',
    localPath: 'DEs/patents/IN-PATENT-01-BI-TEMPORAL-MERKLE-ODONTOGRAM.md',
  },
  {
    id: 'in-pat-02',
    code: 'IN-PAT-2026-02',
    title: 'A System and Method for Hardware-Agnostic Automated Ingestion and Real-Time Normalization of 3D Intraoral Volumetric Datasets via Non-Invasive Browser Kernel Watcher',
    jurisdiction: 'Indian Patent Office (IPO) / CGPDTM',
    statutoryBasis: 'Form 2 (Second Schedule) Complete Specification · Patents Act 1970 § 10 & Rule 13 · CRI Guidelines 2017',
    ipcCodes: ['G16H 30/20', 'A61C 9/00', 'G06T 17/00'],
    shortDescription: 'Zero-driver browser File System Access API directory watcher that auto-detects multi-vendor 3D intraoral scans, synthesizes a 4-tier progressive LOD pyramid, and validates occlusal clearances chairside.',
    problemSolved: 'Dental practices juggle heterogeneous intraoral optical scanner (IOS) hardware (3Shape, Medit, iTero, Carestream) that lock massive 50MB–250MB meshes in local folders, causing 2–10 minute chairside broadband delays and late discovery of insufficient preparation clearances at the milling lab.',
    technicalEffect: 'Client-side mesh decimation reducing polygon vertices by 95% into a coarse LOD tier streaming to dentists and labs in under 80ms, combined with real-time Euclidean distance field vertex shaders highlighting occlusal clearance deficiencies prior to order dispatch.',
    claimsSummary: [
      'Driverless, zero-installation directory watcher running in browser sandboxes via persistent FileSystemDirectoryHandle polling.',
      'Automated multi-vendor detection and client-side binary geometry parsing for STL, vertex-colored PLY, and textured OBJ formats.',
      '4-tier progressive Level-of-Detail (LOD) pyramid generation streaming decimated LOD 0 (<80ms) while asynchronously uploading production LOD 3 to Cloudflare R2.',
      'Real-time 3D Euclidean distance field computation between prepared tooth vertices and opposing arch in intercuspal occlusion.',
      'Dynamic vertex shader color-coding (Red < 1.0mm, Yellow 1.0–1.5mm, Green > 1.5mm) for instantaneous chairside preparation validation.',
    ],
    abstract: 'A system and method for zero-latency, driverless ingestion of 3D intraoral optical dental scans. A browser-native directory watcher monitors local scanner export folders, automatically detects completed scans, and normalizes multi-vendor 3D geometries in client memory. The system synthesizes a 4-tier progressive Level-of-Detail (LOD) pyramid, streaming a 95% decimated coarse mesh to clinicians and dental laboratories in under 80 milliseconds for immediate 3D inspection while uploading the production-grade high-density mesh asynchronously. Automated client-side occlusal clearance distance mapping identifies preparation inadequacies chairside before laboratory submission.',
    localPath: 'DEs/patents/IN-PATENT-02-ZERO-LATENCY-HARDWARE-AGNOSTIC-SCANNER-INGESTION.md',
  },
  {
    id: 'in-pat-03',
    code: 'IN-PAT-2026-03',
    title: 'A System and Method for Dual-Layer Context-Aware Clinical-Laboratory Asynchronous Messaging and Soft-Copy CAD/CAM Archival Engine',
    jurisdiction: 'Indian Patent Office (IPO) / CGPDTM',
    statutoryBasis: 'Form 2 (Second Schedule) Complete Specification · Patents Act 1970 § 10 & Rule 13 · CRI Guidelines 2017',
    ipcCodes: ['G16H 40/20', 'G06Q 50/22', 'A61C 13/00'],
    shortDescription: 'State-machine gated clinical-laboratory real-time messaging, dual-layer operational timeline filtering, and Exocad .constructionInfo XML parameter extraction with permanent soft-copy remake warranty binding.',
    problemSolved: 'Clinicians and dental labs communicate haphazardly via unorganized messaging apps, barrage milling technicians before cases are reviewed, and lack soft-copy CAD archives—causing 5%–15% of restorative remakes to require painful, expensive full patient re-scanning.',
    technicalEffect: 'Cryptographic locking of communication channels during unconfirmed intake states to eliminate clutter, dual-layer visibility isolating internal lab steps (sintering, milling) from clinic tracking, and immutable remake tokens linking Exocad parameters to permanent 3D CAD meshes for zero-rescan remilling.',
    claimsSummary: [
      'Order-specific state machine gating real-time chat: locked during DRAFT/PENDING, auto-unlocked upon transitioning to IN_PROGRESS (Active Production).',
      'Dual-layer timeline filtering partitioning operational events into LAB_INTERNAL, CLINIC_EXTERNAL, and BOTH for privacy-preserving transparency.',
      'Automated Exocad .constructionInfo XML parser extracting restorative material, tooth shade, margin gaps, and cement clearances.',
      'Cryptographic soft-copy CAD binding archiving finalized 3D restorative mesh to produce an immutable remake token.',
      'Automated re-milling triggering mechanism eliminating physical impression or optical re-scan cycles during prosthetic remakes.',
    ],
    abstract: 'A system and method for orchestrating clinical-laboratory prosthodontic workflows. The system enforces state-machine gated communication, locking direct chat until a dental laboratory formally accepts a case into active production, thereby eliminating premature clutter. A dual-layer timeline isolates internal fabrication events from clinician-facing progress updates. The system extracts structured CAD parameters from Exocad files and cryptographically archives the final 3D milled prosthetic geometry to guarantee permanent remake warranties without clinical re-scanning.',
    localPath: 'DEs/patents/IN-PATENT-03-DUAL-LAYER-CLINICAL-PROSTHETIC-STATE-GATE.md',
  },
]
