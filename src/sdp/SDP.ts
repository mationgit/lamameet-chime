// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import SDPCandidateType from './SDPCandidateType';
import SDPMediaSection from './SDPMediaSection';

/**
 * [[SDP]] manages and helps munge an SDP during negotiation.
 */
export default interface SDP {
  /**
   * Clones an SDP
   */
  clone(): SDP;

  /**
   * Splits SDP string into lines
   */
  lines(): string[];

  /**
   * Checks whether the SDP has candidates for any m-line
   */
  hasCandidates(): boolean;

  /**
   * Checks whether the SDP has candidates for all m-lines
   */
  hasCandidatesForAllMLines(): boolean;

  /**
   * Removes candidates of a given type from SDP
   */
  withoutCandidateType(candidateTypeToExclude: SDPCandidateType): SDP;

  /**
   * Removes server reflexive candidate from SDP
   */
  withoutServerReflexiveCandidates(): SDP;

  /**
   * Inserts a parameter to the SDP local offer setting the desired average audio bitrate
   */
  withAudioMaxAverageBitrate(maxAverageBitrate: number): SDP;

  /**
   * Munges Unified-Plan SDP from different browsers to conform to one format
   */
  withUnifiedPlanFormat(): SDP;

  /**
   * Extracts the ssrc for the sendrecv video media section in SDP
   */
  ssrcForVideoSendingSection(): string;

  /**
   * Returns whether the sendrecv video sections if exist have two different SSRCs in SDPs
   */
  videoSendSectionHasDifferentSSRC(previousSdp: SDP): boolean;

  /**
   * Removes H.264 from the send section.
   */
  removeH264SupportFromSendSection(): SDP;

  /**
   * List of parsed media sections sections in order they occur on SDP.
   */
  mediaSections(): SDPMediaSection[];
}
